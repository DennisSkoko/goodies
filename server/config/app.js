'use strict'

const path = require('path')
const dotenv = require('dotenv')

const root = path.resolve(__dirname, '..')

dotenv.config({
  path: path.join(root, '.env')
})

module.exports = {
  database: {
    dialect: 'mysql',
    host: process.env.GOODIES_DB_HOST || '127.0.0.1',
    port: process.env.GOODIES_DB_PORT || 3306,
    username: process.env.GOODIES_DB_USER || 'root',
    password: process.env.GOODIES_DB_PASS || '',
    database: process.env.GOODIES_DB_NAME || 'goodies',
    logging: false
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
