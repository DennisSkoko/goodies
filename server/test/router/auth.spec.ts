import * as request from 'supertest'
import * as express from 'express'

import { connection as db } from '../../src/db/connection'
import { hasher } from '../../src/hasher'
import { auth as router } from '../../src/middlewares/routers/auth'
import { errorHandler } from '../../src/middlewares/error-handler'
import { jwt } from '../../src/jwt'

describe('router.auth', () => {
  let app: express.Express

  beforeAll(() => {
    app = express()
    app.use(express.json())
    app.use(router)
    app.use(errorHandler)
  })

  describe('PORT /api/auth', () => {
    let mockHasherCompare: jest.SpyInstance
    let mockDbFindOneOrFail: jest.SpyInstance
    let mockJwtSign: jest.SpyInstance

    beforeAll(() => {
      mockHasherCompare = jest.spyOn(hasher, 'compare')
      mockDbFindOneOrFail = jest.spyOn(db.manager, 'findOneOrFail')
      mockJwtSign = jest.spyOn(jwt, 'sign')
    })

    afterAll(() => {
      jest.resetAllMocks()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should authenticate with provided values', (done) => {
      mockHasherCompare.mockImplementation((plain: string, password: string) => {
        return plain === password
      })

      mockDbFindOneOrFail.mockResolvedValue({
        id: '<uuid>',
        email: 'example@email.com',
        password: 'secret'
      })

      mockJwtSign.mockResolvedValue('<token>')

      request(app)
        .post('/api/auth')
        .send({
          email: 'example@email.com',
          password: 'secret'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(/<uuid>/)
        .expect(/<token>/)
        .end(done)
    })

    it('should fail when not providing values', (done) => {
      request(app)
        .post('/api/auth')
        .expect(422)
        .expect('Content-Type', /json/)
        .end(done)
    })

    it('should fail if the email is not registered', (done) => {
      mockDbFindOneOrFail.mockRejectedValue(Object.assign(new Error(), {
        name: 'EntityNotFound'
      }))

      request(app)
        .post('/api/auth')
        .send({
          email: 'example@email.com',
          password: 'secret'
        })
        .expect(422)
        .expect('Content-Type', /json/)
        .end(done)
    })

    it('should handle error from database', (done) => {
      mockDbFindOneOrFail.mockRejectedValue(new Error('Generic Error'))

      request(app)
        .post('/api/auth')
        .send({
          email: 'example@email.com',
          password: 'secret'
        })
        .expect(500)
        .expect('Content-Type', /json/)
        .end(done)
    })
  })
})
