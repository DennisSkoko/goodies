'use strict'

const graphql = require('./graphql')

module.exports = (app) => {
  graphql.applyMiddleware({ app })
}
