'use strict'

const config = require('../config/app')
const http = require('./http')
const logger = require('./logger')
const database = require('./database')

database.authenticate()
  .then(() => {
    logger.info('Successfully connected to the database')
  })
  .catch(err => {
    logger.error('Failed to connected to the database', {
      error: err.message
    })
  })

http.listen(config.http.port, () => {
  logger.info('HTTP server has started', {
    port: config.http.port
  })
})
