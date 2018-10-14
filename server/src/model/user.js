'use strict'

const { Schema } = require('mongoose')
const db = require('../db')

const schema = new Schema({
  id: { type: Schema.Types.ObjectId, index: true },
  name: String,
  email: { type: String, unique: true },
  password: String,
  suspended: Boolean,
  created: Date
})

module.exports = db.model('User', schema)
