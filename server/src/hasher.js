'use strict'

const bcrypt = require('bcryptjs')
const config = require('../config/app')

module.exports = {
  hash (password) {
    return bcrypt.hash(password, config.hasher.saltLength)
  },

  compare (password, hash) {
    return bcrypt.compare(password, hash)
  }
}
