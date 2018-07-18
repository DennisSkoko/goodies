import * as request from 'supertest'
import * as express from 'express'

import { connection as db } from '../../src/db/connection'
import { hasher } from '../../src/hasher'
import { User } from '../../src/db/entities'
import { user as router } from '../../src/middlewares/routers/user'

describe('router.user', () => {
  let app: express.Express | null = null

  beforeAll(() => {
    app = express()
    app.use(express.json())
    app.use(router)
  })

  describe('POST /api/user', () => {
    let mockHash: jest.SpyInstance
    let mockDbSave: jest.SpyInstance

    beforeAll(() => {
      mockHash = jest.spyOn(hasher, 'hash')
      mockDbSave = jest.spyOn(db.manager, 'save')
    })

    afterAll(() => {
      jest.resetAllMocks()
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should create a user with the provided values', (done) => {
      mockHash.mockResolvedValue('<hash>')
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
        .expect(/<uuid>/)
        .end((err: Error) => {
          if (err) done(err)

          expect(mockDbSave.mock.calls[0][0].password).toBe('<hash>')

          done()
        })
    })

    it('should fail when not providing all parameters', (done) => {
      mockHash.mockResolvedValue('<hash>')

      request(app)
        .post('/api/user')
        .send({
          name: 'Foo Bar'
        })
        .expect(422)
        .end(err => {
          if (err) done(err)

          expect(mockHash).toBeCalled()

          done()
        })
    })

    it('should fail when providing invalid email', (done) => {
      mockHash.mockResolvedValue('<hash>')

      request(app)
        .post('/api/user')
        .send({
          name: 'Foo Bar',
          email: 'invalid',
          password: 'secret'
        })
        .expect(422)
        .end(done)
    })

    it('should fail when providing invalid email', (done) => {
      mockDbSave.mockRejectedValue(new Error('Generic Error'))

      request(app)
        .post('/api/user')
        .send({
          name: 'Foo Bar',
          email: 'example@email.com',
          password: 'secret'
        })
        .expect(500)
        .end(done)
    })
  })
})
