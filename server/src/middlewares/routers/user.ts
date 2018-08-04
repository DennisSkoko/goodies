import { Router, Request, Response, NextFunction } from 'express'
import { body, validationResult, Result } from 'express-validator/check'

import { connection as db } from '../../db/connection'
import { User } from '../../db/entities'
import { hasher } from '../../hasher'
import { UnprocessableEntity, ValidatorError } from '../../errors'
import { jwt } from '../../jwt'

export const user = Router()

user.route('/api/user')
  .post([
    body('name', 'Name must be between 3 and 75 characters')
      .not().isEmpty()
      .trim()
      .isLength({ min: 3, max: 75 }),
    body('email', 'Email must be a valid email address')
      .trim()
      .isEmail()
      .normalizeEmail(),
    body('password', 'Password must be at least 6 characters')
      .trim()
      .not().isEmpty()
      .isLength({ min: 6 })
  ], async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req) as Result<ValidatorError>

      if (!errors.isEmpty()) {
        next(UnprocessableEntity.makeFromValidatorErrors(errors))
        return
      }

      const user = new User()

      user.name = req.body.name
      user.email = req.body.email
      user.password = await hasher.hash(req.body.password)

      const newUser = await db.manager.save(user)

      res.status(201).json({
        id: newUser.id,
        token: await jwt.sign({ sub: newUser.id })
      })
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        next(new UnprocessableEntity([
          {
            property: 'email',
            constraint: 'Email is already in use'
          }
        ]))
        return
      }

      next(err)
    }
  })
