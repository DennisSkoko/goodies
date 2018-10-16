'use strict'

const { gql } = require('apollo-server-koa')
const User = require('../../model/user')

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
    users: () => User.find()
  },

  Mutation: {
    createUser: (root, { user }) => {
      return User.create({
        ...user,
        suspended: false,
        created: Date.now()
      })
    }
  }
}
