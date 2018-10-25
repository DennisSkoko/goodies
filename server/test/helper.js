'use strict'

const config = require('../config/app')

module.exports = {
  getGraphqlEnpoint () {
    return config.graphql.path
  }
}
