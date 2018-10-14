'use strict'

const { ApolloServer } = require('apollo-server-koa')
const { createConfigFromModels } = require('../util')
const models = require('./models')

const server = new ApolloServer({
  ...createConfigFromModels(models)
})

module.exports = server
