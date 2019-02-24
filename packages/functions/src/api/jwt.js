const util = require('util')
const jwt = require('jsonwebtoken')
const config = require('../config')

const signAsync = util.promisify(jwt.sign)
const verifyAsync = util.promisify(jwt.verify)

module.exports = {
  sign (payload) {
    return signAsync(payload, config.jwt.secret, config.jwt.options)
  },

  verify (token) {
    return verifyAsync(token, config.jwt.secret)
  }
}
