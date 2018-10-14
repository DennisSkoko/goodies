'use strict'

const graphql = require('./graphql')
const config = require('../config/app')

module.exports = (app) => {
  graphql.applyMiddleware({
    path: config.graphql.path,
    app
  })
}
