'use strict'

const Sequelize = require('sequelize')
const config = require('../config/app')

module.exports = new Sequelize(config.database)
