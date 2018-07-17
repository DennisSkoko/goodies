import * as request from 'supertest'
import * as express from 'express'

import { connection } from '../../src/db/connection'
import { hasher } from '../../src/hasher'
import { User } from '../../src/db/entities'
import { user as router } from '../../src/middlewares/routers/user'

jest.mock('../../src/db/connection')
jest.mock('../../src/hasher')

describe('router.user', () => {
  let app: express.Express | null = null

  beforeAll(() => {
    app = express()
    app.use(express.json())
    app.use(router)
  })

  describe('POST /api/user', () => {
    beforeAll(() => {
      ;(hasher.hash as jest.Mock).mockReturnValue('<hash>')

      ;(connection.manager.save as jest.Mock).mockImplementation(
        (user: User) => Object.assign(user, {
          id: '<uuid>'
        })
      )
    })

    it('should create a user with the provided values', (done) => {
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

          expect((connection.manager.save as jest.Mock).mock.calls[0][0].password)
            .toBe('<hash>')

          done()
        })
    })

    it('should fail when not providing all parameters', (done) => {
      request(app)
        .post('/api/user')
        .send({
          name: 'Foo Bar'
        })
        .expect(422)
        .end(done)
    })

    it('should fail when providing invalid email', (done) => {
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
      ;(connection.manager.save as jest.Mock)
        .mockRejectedValue(new Error('Generic Error'))

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
