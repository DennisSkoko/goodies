'use strict'

const http = require('./http')

http.listen(8080, () => {
  console.log('HTTP server has started')
})
