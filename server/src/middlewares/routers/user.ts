import { Router, Request, Response, NextFunction } from 'express'
import { validate } from 'class-validator'

import { connection as db } from '../../db/connection'
import { User } from '../../db/entities'

export const user = Router()

user.route('/api/user')
  .post((req: Request, res: Response, next: NextFunction) => {
    const user = new User()

    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    validate(user).then(errors => {
      if (errors.length !== 0) {
        res.status(422).json(
          errors.map(error => ({
            property: error.property,
            constraints: Object.values(error.constraints)
          }))
        )
        return
      }

      db.manager.save(user)
        .then((user: User) => {
          res.json({
            id: user.id
          })
        })
        .catch((err: any) => {
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
        })
    })
  })
