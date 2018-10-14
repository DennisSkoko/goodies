'use strict'

const config = require('../config/app')
const http = require('./http')

http.listen(config.http.port, () => {
  console.log('HTTP server has started')
})
