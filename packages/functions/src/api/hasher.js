const bcrypt = require('bcryptjs')
const config = require('../config')

module.exports = {
  hash (data) {
    return bcrypt.hash(data, config.hasher.rounds)
  },

  compare (unhashed, hashed) {
    return bcrypt.compare(unhashed, hashed)
  }
}
