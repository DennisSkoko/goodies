const functions = require('firebase-functions')
const config = require('../config')

module.exports = functions
  .region(config.firebase.region)
