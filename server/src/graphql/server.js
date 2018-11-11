'use strict'

const { ApolloServer } = require('apollo-server-koa')
const config = require('../../config/app')
const { createConfigFromModels } = require('../util')
const models = require('./models')
const context = require('./context')

const server = new ApolloServer({
  ...createConfigFromModels(models),
  ...config.graphql,
  context
})

module.exports = server
