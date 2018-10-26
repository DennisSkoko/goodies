'use strict'

module.exports = {
  build: jest.fn().mockReturnThis(),
  save: jest.fn().mockResolvedValue({})
}
