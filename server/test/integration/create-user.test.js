'use strict'

const request = require('supertest')
const helper = require('../helper')
const app = require('../../src/app')
const User = require('../../src/db/user')

afterEach(() => User.destroy({ truncate: true }))

it('creates a user', () => {
  return request(app.callback())
    .post(helper.getGraphqlEnpoint())
    .send({
      query: `
        mutation($user: UserCreateInput!) {
          createUser(user: $user) {
            id
            name
            email
            suspended
            created
          }
        }
      `,
      variables: {
        user: {
          name: 'Foo',
          email: 'foo@example.com',
          password: 'secret'
        }
      }
    })
    .expect(200)
    .then(({ body }) => {
      expect(body.data.createUser).toEqual(
        expect.objectContaining({
          id: expect.anything(),
          name: 'Foo',
          email: 'foo@example.com',
          suspended: false,
          created: expect.anything()
        })
      )

      expect(body.errors).not.toBeDefined()
    })
})
