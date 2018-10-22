'use strict'

const { gql } = require('apollo-server-koa')
const User = require('../../db/user')

module.exports.typeDef = gql`
type User {
  id: ID!
  name: String!
  email: String!
  suspended: Boolean!
  createdAt: String!
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
  createUser(user: UserCreateInput): User
}
`

module.exports.resolvers = {
  Query: {
    users: () => User.findAll(),
    user: (root, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (root, { user }) => User.build(user).save()
  }
}
