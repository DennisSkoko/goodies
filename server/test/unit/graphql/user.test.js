'use strict'

const User = require('../../../src/db/user')
const hasher = require('../../../src/hasher')
const model = require('../../../src/graphql/models/user')

const mutation = model.resolvers.Mutation

describe('mutation.createUser', () => {
  beforeAll(() => {
    jest.spyOn(hasher, 'hash').mockResolvedValue('<hash>')
    jest.spyOn(User, 'create').mockResolvedValue({})
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('passes in the required values to model', async () => {
    await mutation.createUser(null, {
      user: {
        name: 'Foo',
        email: 'bar@example.com',
        password: 'secret'
      }
    })

    expect(User.create).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Foo',
        email: 'bar@example.com',
        password: '<hash>'
      })
    )
  })

  it('hashes the password', async () => {
    await mutation.createUser(null, {
      user: {
        name: 'Foo',
        email: 'bar@example.com',
        password: 'secret'
      }
    })

    expect(hasher.hash).toHaveBeenCalledWith('secret')
  })
})
