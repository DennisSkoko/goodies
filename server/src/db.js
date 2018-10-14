'use strict'

const mongoose = require('mongoose')
const config = require('../config/app').database

module.exports = mongoose.createConnection(config.uri, {
  useNewUrlParser: true
})
