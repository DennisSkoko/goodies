'use strict'

const model = require('../../../src/graphql/models/auth')
const User = require('../../../src/db/user')
const hasher = require('../../../src/hasher')
const jwt = require('../../../src/jwt')

jest.mock('../../../src/hasher')
jest.mock('../../../src/jwt')
jest.mock('../../../src/logger')

const mutation = model.resolvers.Mutation

describe('mutation.authenticate', () => {
  beforeAll(() => {
    jest.spyOn(User, 'findOne')
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('returns a token when everything is valid', async () => {
    User.findOne.mockResolvedValue({ id: '<id>', password: 'secret' })

    const result = await mutation.authenticate(null, {
      email: 'foo@example.com',
      password: 'secret'
    })

    expect(User.findOne).toHaveBeenCalledWith(
      expect.objectContaining({ where: { email: 'foo@example.com' } })
    )
    expect(hasher.compare).toHaveBeenCalledWith('secret', 'secret')
    expect(jwt.sign).toHaveBeenCalledWith(
      expect.objectContaining({ sub: '<id>' })
    )
    expect(result).toBe('<token>')
  })

  it('throws when the user does not exists', async () => {
    User.findOne.mockResolvedValue(null)

    const promise = mutation.authenticate(null, {
      email: 'foo@example.com',
      password: 'secret'
    })

    await expect(promise).rejects.toThrow(/Email not registered/)
  })

  it('throws when the password in invalid', async () => {
    User.findOne.mockResolvedValue({ id: '<id>', password: 'secret' })

    const promise = mutation.authenticate(null, {
      email: 'foo@example.com',
      password: 'invalid'
    })

    await expect(promise).rejects.toThrow(/Incorrect password/)
  })
})
