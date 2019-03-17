const request = require('../util/request')
const auth = require('../../../src/api/middlewares/auth')
const db = require('../../../src/api/db/')
const jwt = require('../../../src/api/jwt')

jest.mock('../../../src/api/hasher')

describe('POST /auth/sign-up', () => {
  const act = () => request(auth).post('/auth/sign-up')

  beforeAll(() => {
    jest.spyOn(db.user, 'get').mockResolvedValue()
    jest.spyOn(db.user, 'create').mockResolvedValue()
    jest.spyOn(jwt, 'sign').mockResolvedValue('<jwt-token>')
  })

  afterAll(() => { jest.restoreAllMocks() })

  it('rejects when the user exists', async () => {
    db.user.get.mockResolvedValueOnce({})

    const res = await act()

    expect(res.statusCode).toBe(401)
  })

  it('omits the password when signing the user data', async () => {
    db.user.get.mockResolvedValueOnce(null)
    db.user.create.mockResolvedValueOnce({ password: 'secret' })

    const res = await act()

    expect(res.statusCode).toBe(201)
    expect(jwt.sign).toHaveBeenCalledWith(
      expect.not.objectContaining({
        password: 'secret'
      })
    )
  })

  it('responds with the token', async () => {
    db.user.get.mockResolvedValueOnce(null)
    db.user.create.mockResolvedValueOnce({})

    const res = await act()

    expect(res.statusCode).toBe(201)
    expect(res.body).toEqual({ token: '<jwt-token>' })
  })

  it('handles any unexpected errors', async () => {
    db.user.get.mockRejectedValue(new Error())

    const res = await act()

    expect(res.statusCode).toBe(500)
  })
})

describe('POST /auth/sign-in', () => {
  const act = (debug) => request(auth, debug).post('/auth/sign-in')

  beforeAll(() => {
    jest.spyOn(db.user, 'get').mockResolvedValue()
    jest.spyOn(jwt, 'sign').mockResolvedValue('<jwt-token>')
  })

  afterAll(() => { jest.restoreAllMocks() })

  it('rejects when the user does not exists', async () => {
    db.user.get.mockResolvedValueOnce(null)

    const res = await act()

    expect(res.statusCode).toBe(401)
  })

  it.todo('rejects when the user is suspended')
  it.todo('rejects when the password is not correct')
  it.todo('omits the password when signing the user data')
  it.todo('responds with the token')
  it.todo('handles any unexpected errors')
})
