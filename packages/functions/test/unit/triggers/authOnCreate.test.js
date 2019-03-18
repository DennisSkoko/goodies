const functions = require('firebase-functions-test')
const authOnCreate = require('../../../src/triggers/authOnCreate')
const db = require('../../../src/db')

const act = functions().wrap(authOnCreate)

beforeAll(() => {
  jest.spyOn(db.user, 'create')
})

afterAll(() => {
  jest.restoreAllMocks()
})

it('creates a user with the name from the email', async () => {
  db.user.create.mockResolvedValueOnce(null)

  const user = { uid: 'foo', email: 'bar@example.com' }
  await act(user)

  expect(db.user.create).toHaveBeenCalledWith({
    uid: 'foo',
    name: 'bar'
  })
})
