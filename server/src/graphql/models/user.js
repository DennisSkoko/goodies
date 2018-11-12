'use strict'

const { gql } = require('apollo-server-koa')
const logger = require('../../logger')
const hasher = require('../../hasher')
const User = require('../../db/user')

module.exports.typeDef = gql`
type User {
  id: ID!
  name: String!
  email: String!
  suspended: Boolean!
  created: String!
}

extend type Query {
  users: [User!]!
  user(id: ID!): User
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
}

extend type Mutation {
  createUser(user: UserCreateInput): User!
}
`

module.exports.resolvers = {
  Query: {
    users () {
      return User.findAll()
    },

    user (root, { id }) {
      return User.findById(id)
    }
  },

  Mutation: {
    createUser (root, { user }) {
      return hasher.hash(user.password)
        .then(hash => User.create({ ...user, password: hash }))
        .then(user => {
          logger.verbose('Created a user', { id: user.id })
          return user
        })
    }
  }
}
