'use strict'

const path = require('path')
const dotenv = require('dotenv')

const root = path.resolve(__dirname, '..')

dotenv.config({
  path: path.join(root, '.env')
})

module.exports = {
  database: {
    uri: process.env.GOODIES_DB_URI || 'mongodb://127.0.0.1/goodies'
  },

  graphql: {
    playground: process.env.NODE_ENV !== 'production',
    debug: process.env.NODE_ENV !== 'production',
    tracing: process.env.NODE_ENV !== 'production',
    path: '/api/graphql'
  },

  http: {
    port: process.env.GOODIES_HTTP_PORT || 80
  },

  logger: {
    level: process.env.GOODIES_LOG_LEVEL || 'info',
    format: 'simple'
  }
}
