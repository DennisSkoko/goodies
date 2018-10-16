'use strict'

const { Schema } = require('mongoose')
const db = require('../db')

const schema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  suspended: Boolean,
  created: Date
})

module.exports = db.model('User', schema)
