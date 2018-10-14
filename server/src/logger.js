'use strict'

const winston = require('winston')
const config = require('../config/app').logger

const logger = winston.createLogger({
  level: config.level,
  format: winston.format[config.format]()
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console())
}

module.exports = logger
