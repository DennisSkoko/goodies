import * as express from 'express'
import * as request from 'supertest'
import { JsonWebTokenError } from 'jsonwebtoken'

import { authenticate } from '../src/middlewares/authenticate'
import { errorHandler } from '../src/middlewares/error-handler'
import { connection as db } from '../src/db/connection'
import { jwt, JwtPayload } from '../src/jwt'
import { User } from '../src/db/entities'

describe('authenticate', () => {
  let app: express.Express
  let mockJwtVerify: jest.SpyInstance
  let mockDbFindOneOrFail: jest.SpyInstance

  beforeAll(() => {
    app = express()
    app.use(authenticate())
    app.use(errorHandler)
  })

  beforeAll(() => {
    mockJwtVerify = jest.spyOn(jwt, 'verify')
    mockDbFindOneOrFail = jest.spyOn(db.manager, 'findOneOrFail')
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('require authentication when header is not sent', () => {
    return request(app)
      .get('/')
      .expect(401)
  })

  test('notify request is invalid when header is not formatted properly', () => {
    const invalidHeaders = [
      'Bearer: <token>',
      'Bearer<token>',
      '<token>'
    ]

    return Promise.all(
      invalidHeaders.map(invalidHeader =>
        request(app)
          .get('/')
          .set('Authorization', invalidHeader)
          .expect(400)
      )
    )
  })

  test('reject the request when user is suspended', () => {
    mockJwtVerify.mockResolvedValue({ sub: '<uuid>' } as JwtPayload)
    mockDbFindOneOrFail.mockResolvedValue(Object.assign(new User(), {
      suspended: true
    }))

    return request(app)
      .get('/')
      .set('Authorization', 'Bearer <token>')
      .expect(403)
      .expect(/suspended/)
  })

  test('reject the request when the token is invalid', () => {
    mockJwtVerify.mockRejectedValue(new JsonWebTokenError('invalid token'))

    return request(app)
      .get('/')
      .set('Authorization', 'Bearer <token>')
      .expect(403)
      .expect(/token.*not valid/i)
  })

  test('require authentication when the user does not exists', () => {
    mockJwtVerify.mockResolvedValue({ sub: '<uuid>' } as JwtPayload)
    mockDbFindOneOrFail.mockRejectedValue(Object.assign(new Error(), {
      name: 'EntityNotFound'
    }))

    return request(app)
      .get('/')
      .set('Authorization', 'Bearer <token>')
      .expect(401)
  })
})
