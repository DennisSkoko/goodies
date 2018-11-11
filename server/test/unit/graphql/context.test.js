'use strict'

const context = require('../../../src/graphql/context')
const User = require('../../../src/db/user')
const jwt = require('../../../src/jwt')

function makeContext ({ authToken }) {
  return {
    ctx: {
      request: {
        header: {
          authorization: authToken
        }
      }
    }
  }
}

beforeAll(() => {
  jest.spyOn(jwt, 'verify')
  jest.spyOn(User, 'findByPk')
})

it('authenticates users with jwt token from \'Authorization\' header', async () => {
  jwt.verify.mockResolvedValueOnce({ sub: 'user-id' })
  User.findByPk.mockResolvedValueOnce({
    id: 'user-id',
    name: 'Example',
    email: 'foo@example.com'
  })

  const result = await context(makeContext({ authToken: 'Bearer jwt-token' }))

  expect(result).toEqual({
    user: {
      id: 'user-id',
      name: 'Example',
      email: 'foo@example.com'
    }
  })

  expect(jwt.verify).toHaveBeenCalledWith('jwt-token')
  expect(User.findByPk).toHaveBeenCalledWith('user-id')
})

it('throws error when database fails to fetch data', async () => {
  jwt.verify.mockResolvedValueOnce({ sub: 'user-id' })
  User.findByPk.mockRejectedValueOnce(new Error('Database error'))

  const promise = context(makeContext({ authToken: 'Bearer jwt-token' }))

  await expect(promise).rejects.toThrow('Database error')
  expect(jwt.verify).toHaveBeenCalled()
  expect(User.findByPk).toHaveBeenCalled()
})

describe('fails the authentication when', () => {
  it('request does not contain token', async () => {
    const result = await context(makeContext({ authToken: null }))

    expect(result).toEqual({ user: null })
    expect(jwt.verify).not.toHaveBeenCalled()
    expect(User.findByPk).not.toHaveBeenCalled()
  })

  it('syntax of \'Authorization\' header is invalid', async () => {
    const result = await context(makeContext({ authToken: 'jwt-token' }))

    expect(result).toEqual({ user: null })
    expect(jwt.verify).not.toHaveBeenCalled()
    expect(User.findByPk).not.toHaveBeenCalled()
  })

  it('request contains an invalid token', async () => {
    jwt.verify.mockRejectedValueOnce(new Error('Invalid token'))

    const result = await context(makeContext({ authToken: 'Bearer jwt-token' }))

    expect(result).toEqual({ user: null })
    expect(jwt.verify).toHaveBeenCalled()
    expect(User.findByPk).not.toHaveBeenCalled()
  })

  it('request contains a token without \'sub\' property', async () => {
    jwt.verify.mockResolvedValueOnce({})

    const result = await context(makeContext({ authToken: 'Bearer jwt-token' }))

    expect(result).toEqual({ user: null })
    expect(jwt.verify).toHaveBeenCalled()
    expect(User.findByPk).not.toHaveBeenCalled()
  })

  it('user does not exists in database', async () => {
    jwt.verify.mockResolvedValueOnce({ sub: 'user-id' })
    User.findByPk.mockResolvedValueOnce(null)

    const result = await context(makeContext({ authToken: 'Bearer jwt-token' }))

    expect(result).toEqual({ user: null })
    expect(jwt.verify).toHaveBeenCalled()
    expect(User.findByPk).toHaveBeenCalled()
  })
})
