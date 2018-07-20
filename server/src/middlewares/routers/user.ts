import { Router, Request, Response, NextFunction } from 'express'
import { validate } from 'class-validator'

import { connection as db } from '../../db/connection'
import { User } from '../../db/entities'
import { hasher } from '../../hasher'
import { UnprocessableEntity } from '../../errors'

export const user = Router()

user.route('/api/user')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = new User()

      user.name = req.body.name
      user.email = req.body.email
      user.password = await hasher.hash(req.body.password)

      const errors = await validate(user)

      if (errors.length === 0) {
        const newUser = await db.manager.save(user)
        res.status(201).json({ id: newUser.id })
      } else {
        next(UnprocessableEntity.makeFromClassValidatorErrors(errors))
      }
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        next(new UnprocessableEntity([
          {
            property: 'email',
            constraints: ['email is already in use']
          }
        ]))
        return
      }

      next(err)
    }
  })
