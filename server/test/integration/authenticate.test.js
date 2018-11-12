'use strict'

const request = require('supertest')
const helper = require('../helper')
const app = require('../../src/app')
const hasher = require('../../src/hasher')
const User = require('../../src/db/user')

beforeAll(async () => User.create({
  name: 'Foo',
  email: 'authenticate@example.com',
  password: await hasher.hash('secret')
}))

afterEach(() => User.destroy({ where: {} }))

it('returns a token when authenticated', () => {
  return request(app.callback())
    .post(helper.getGraphqlEnpoint())
    .send({
      query: `
        mutation($email: String!, $password: String!) {
          authenticate(email: $email, password: $password)
        }
      `,
      variables: {
        email: 'authenticate@example.com',
        password: 'secret'
      }
    })
    .expect(200)
    .then(({ body }) => {
      expect(body.data.authenticate).toBeDefined()
    })
})
