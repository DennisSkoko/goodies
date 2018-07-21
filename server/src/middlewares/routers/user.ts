import { Router, Request, Response, NextFunction } from 'express'
import { validate } from 'class-validator'

import { connection as db } from '../../db/connection'
import { User } from '../../db/entities'
import { hasher } from '../../hasher'
import { UnprocessableEntity } from '../../errors'
import { jwt } from '../../jwt'

export const user = Router()

user.route('/api/user')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = new User()

      user.name = req.body.name
      user.email = req.body.email
      user.password = req.body.password

      const errors = await validate(user)

      if (errors.length !== 0) {
        next(UnprocessableEntity.makeFromClassValidatorErrors(errors))
        return
      }

      user.password = await hasher.hash(user.password)
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
            constraints: ['email is already in use']
          }
        ]))
        return
      }

      next(err)
    }
  })
