'use strict'

const config = require('../config/app')
const jwt = require('../src/jwt')
const Ingredient = require('../src/db/ingredient')
const Recipe = require('../src/db/recipe')
const Step = require('../src/db/step')
const User = require('../src/db/user')
const userGraphql = require('../src/graphql/models/user')

const createUser = userGraphql.resolvers.Mutation.createUser

module.exports = {
  getGraphqlEnpoint () {
    return config.graphql.path
  },

  createUserAndGetToken (user) {
    return createUser(null, { user })
      .then(user => jwt.sign({ sub: user.id }))
  },

  async clearDatabase () {
    await Ingredient.destroy({ where: {} })
    await Step.destroy({ where: {} })
    await Recipe.destroy({ where: {} })
    await User.destroy({ where: {} })
  }
}
