module.exports = {
  hash: jest.fn().mockResolvedValue('<hash>'),
  compare: jest.fn().mockImplementation(
    (unhashed, hashed) => unhashed === hashed
  )
}
