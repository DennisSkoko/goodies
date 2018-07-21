import * as request from 'supertest'
import * as express from 'express'

import { connection as db } from '../../src/db/connection'
import { hasher } from '../../src/hasher'
import { User } from '../../src/db/entities'
import { user as router } from '../../src/middlewares/routers/user'
import { errorHandler } from '../../src/middlewares/error-handler'

describe('router.user', () => {
  let app: express.Express

  beforeAll(() => {
    app = express()
    app.use(express.json())
    app.use(router)
    app.use(errorHandler)
  })

  describe('POST /api/user', () => {
    let mockHasherHash: jest.SpyInstance
    let mockDbSave: jest.SpyInstance

    beforeAll(() => {
      mockHasherHash = jest.spyOn(hasher, 'hash')
      mockDbSave = jest.spyOn(db.manager, 'save')
    })

    afterAll(() => {
      jest.resetAllMocks()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should create a user with the provided values', (done) => {
      mockHasherHash.mockResolvedValue('<hash>')
      mockDbSave.mockImplementation((user: User) =>
        Object.assign(user, { id: '<uuid>' })
      )

      request(app)
        .post('/api/user')
        .send({
          name: 'Foo Bar',
          email: 'example@email.com',
          password: 'secret'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .expect(/<uuid>/)
        .end((err: Error) => {
          if (err) done(err)

          expect(mockDbSave.mock.calls[0][0].password).toBe('<hash>')
          done()
        })
    })

    it('should fail when not providing parameters', (done) => {
      request(app)
        .post('/api/user')
        .expect(422)
        .expect('Content-Type', /json/)
        .end(done)
    })

    it('should fail when providing invalid email', (done) => {
      mockHasherHash.mockResolvedValue('<hash>')

      request(app)
        .post('/api/user')
        .send({
          name: 'Foo Bar',
          email: 'invalid',
          password: 'secret'
        })
        .expect(422)
        .expect('Content-Type', /json/)
        .end(done)
    })

    it('should handle error from database', (done) => {
      mockDbSave.mockRejectedValue(new Error('Generic Error'))

      request(app)
        .post('/api/user')
        .send({
          name: 'Foo Bar',
          email: 'example@email.com',
          password: 'secret'
        })
        .expect(500)
        .expect('Content-Type', /json/)
        .end(done)
    })
  })
})
