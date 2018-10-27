'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config/app')

module.exports = {
  sign (data) {
    return new Promise((resolve, reject) => {
      jwt.sign(data, config.jwt.secret, config.jwt.options, (err, token) => {
        if (err) reject(err)
        else resolve(token)
      })
    })
  },

  verify (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.jwt.secret, (err, data) => {
        if (err) reject(err)
        else resolve(data)
      })
    })
  }
}
