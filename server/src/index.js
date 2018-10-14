'use strict'

const config = require('../config/app')
const http = require('./http')
const logger = require('./logger')

http.listen(config.http.port, () => {
  logger.info('HTTP server has started', {
    port: config.http.port
  })
})
