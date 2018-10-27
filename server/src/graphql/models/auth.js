'use strict'

const { gql } = require('apollo-server-koa')
const User = require('../../db/user')
const hasher = require('../../hasher')
const jwt = require('../../jwt')
const logger = require('../../logger')

module.exports.typeDef = gql`
extend type Mutation {
  "Returns a token that is valid for 4 hours."
  authenticate(email: String!, password: String!): String!
}
`

module.exports.resolvers = {
  Mutation: {
    async authenticate (root, { email, password }) {
      const user = await User.findOne({ where: { email } })

      if (!user) {
        throw new Error('Email not registered')
      }

      if (!await hasher.compare(password, user.password)) {
        throw new Error('Incorrect password')
      }

      logger.verbose('A user has authenticated', {
        id: user.id,
        email: user.email
      })

      return jwt.sign({ sub: user.id })
    }
  }
}
