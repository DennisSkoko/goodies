import { RequestHandler, Request, Response, NextFunction } from 'express'
import { JsonWebTokenError } from 'jsonwebtoken'

import { BadRequest, Unauthorized, Forbidden } from '../errors'
import { jwt } from '../jwt'
import { connection as db } from '../db/connection'
import { User } from '../db/entities'

export const authenticate = (): RequestHandler =>
  async (req: Request, _res: Response, next: NextFunction) => {
    try {
      const header = req.header('Authorization')

      if (!header) {
        next(new Unauthorized())
        return
      }

      if (!header.startsWith('Bearer ')) {
        next(new BadRequest())
        return
      }

      const payload = await jwt.verify(header.substr(7))
      const user = await db.manager.findOneOrFail(User, {
        id: payload.sub
      })

      if (user.suspended) {
        next(new Forbidden('Account is suspended'))
        return
      }

      req.user = user
      next()
    } catch (err) {
      if (err instanceof JsonWebTokenError) {
        next(new Forbidden())
        return
      }

      if (err.name === 'EntityNotFound') {
        next(new Unauthorized())
        return
      }

      next(err)
    }
  }
