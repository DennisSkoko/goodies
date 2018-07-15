import { Router, Request, Response, NextFunction } from 'express'
import { validate } from 'class-validator'

import { connection as db } from '../../db/connection'
import { User } from '../../db/entities'
import { hasher } from '../../hasher'

export const user = Router()

user.route('/api/user')
  .post(async (req: Request, res: Response, next: NextFunction) => {
    const user = new User()

    user.name = req.body.name
    user.email = req.body.email
    user.password = await hasher.hash(req.body.password)

    try {
      const errors = await validate(user)

      if (errors.length === 0) {
        const newUser = await db.manager.save(user)
        res.status(201).json({ id: newUser.id })
      } else {
        res.status(422).json(
          errors.map(error => ({
            property: error.property,
            constraints: Object.values(error.constraints)
          }))
        )
      }
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.status(422).json([
          {
            property: 'email',
            constraints: ['email is already in use']
          }
        ])
        return
      }

      next(err)
    }
  })
