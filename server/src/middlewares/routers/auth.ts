import { Router, Request, Response, NextFunction } from 'express'
import { body, validationResult, Result } from 'express-validator/check'

import { connection as db } from '../../db/connection'
import { User } from '../../db/entities'
import { hasher } from '../../hasher'
import { UnprocessableEntity, ValidatorError } from '../../errors'
import { jwt } from '../../jwt'

export const auth = Router()

auth.post(
  '/api/auth',
  [
    body('email', 'Email must be a valid email address')
      .trim()
      .isEmail()
      .normalizeEmail(),
    body('password', 'Password must be at least 6 characters')
      .trim()
      .not().isEmpty()
      .isLength({ min: 6 })
  ],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const errors = validationResult(req) as Result<ValidatorError>

      if (!errors.isEmpty()) {
        next(UnprocessableEntity.makeFromValidatorErrors(errors))
        return
      }

      const user = await db.manager.findOneOrFail(User, { email: req.body.email })
      const passwordMatch = await hasher.compare(req.body.password, user.password)

      if (!passwordMatch) {
        next(new UnprocessableEntity([
          {
            property: 'password',
            constraint: 'Password is incorrect'
          }
        ]))
        return
      }

      res.json({
        id: user.id,
        token: await jwt.sign({ sub: user.id })
      })
    } catch (err) {
      if (err.name === 'EntityNotFound') {
        next(new UnprocessableEntity([
          {
            property: 'email',
            constraint: 'Email is not registered'
          }
        ]))
        return
      }

      next(err)
    }
  })
