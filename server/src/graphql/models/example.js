'use strict'

const { gql } = require('apollo-server-koa')

module.exports.typeDef = gql`
extend type Query {
  hello: String!
}

extend type Mutation {
  hello(name: String!): String!
}
`

module.exports.resolvers = {
  Query: {
    hello: () => 'Hello World!'
  },

  Mutation: {
    hello: (root, { name }) => `Hello ${name}!`
  }
}
