'use strict'

const config = require('../config/app')
const db = require('./db')
const http = require('./http')
const logger = require('./logger')

db
  .then(() => {
    logger.info('Successfully connected to MongoDB instance')
  })
  .catch(err => {
    logger.error('Failed to connect to MongoDB instance', {
      error: err.message
    })
  })

http.listen(config.http.port, () => {
  logger.info('HTTP server has started', {
    port: config.http.port
  })
})
