import * as jsonwebtoken from 'jsonwebtoken'

import { settings } from '../conf/settings'

export interface JwtPayload {
  sub: string
}

export const jwt = {
  sign(payload: JwtPayload): Promise<string> {
    return new Promise((resolve, reject) => {
      jsonwebtoken.sign(
        payload,
        settings.jwt.secret,
        settings.jwt.options,
        (err, token) => {
          if (err) reject(err)
          else resolve(token)
        }
      )
    })
  },

  verify (token: string): Promise<JwtPayload> {
    return new Promise((resolve, reject) => {
      jsonwebtoken.verify(token, settings.jwt.secret, (err, payload) => {
        if (err) reject(err)
        else resolve(payload as JwtPayload)
      })
    })
  }
}
