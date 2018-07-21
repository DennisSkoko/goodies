import { Router, Request, Response, NextFunction } from 'express'

import { connection as db } from '../../db/connection'
import { User } from '../../db/entities'
import { hasher } from '../../hasher'
import { UnprocessableEntity } from '../../errors'
import { jwt } from '../../jwt'

export const auth = Router()

auth.post('/api/auth', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.password) {
      next(new UnprocessableEntity([
        {
          property: 'password',
          constraints: [
            'password is required'
          ]
        }
      ]))
      return
    }

    const user = await db.manager.findOneOrFail(User, { email: req.body.email })
    const passwordMatch = await hasher.compare(req.body.password, user.password)

    if (!passwordMatch) {
      next(new UnprocessableEntity([
        {
          property: 'password',
          constraints: [
            'password is incorrect'
          ]
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
          constraints: [
            'email is unregistered'
          ]
        }
      ]))
      return
    }

    next(err)
  }
})
