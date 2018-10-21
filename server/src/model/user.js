'use strict'

const { Schema } = require('mongoose')
const db = require('../db')
const uuid = require('../uuid')

const schema = new Schema({
  id: { type: String, index: true, default: uuid },
  name: String,
  email: { type: String, unique: true },
  password: String,
  suspended: { type: Boolean, default: () => false },
  created: { type: Date, default: Date.now }
})

module.exports = db.model('User', schema)
