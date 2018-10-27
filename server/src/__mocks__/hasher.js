'use strict'

const _ = require('lodash/fp')

module.exports = {
  hash: jest.fn(() => '<hash>'),
  compare: jest.fn(_.equals)
}
