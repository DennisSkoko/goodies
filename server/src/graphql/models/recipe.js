'use strict'

const { gql } = require('apollo-server-koa')
const database = require('../../database')
const logger = require('../../logger')
const Ingredient = require('../../db/ingredient')
const Recipe = require('../../db/recipe')
const Step = require('../../db/step')

function addIndexIdAndRecipeId (recipe, items) {
  return items
    .map((item, i) => ({
      ...item,
      id: i + 1,
      recipe: recipe.id
    }))
}

module.exports.typeDef = gql`
input IngredientInput {
  name: String!
}

input StepInput {
  instructions: String!
}

input RecipeInput {
  name: String!
  description: String!
  private: Boolean!
  ingredients: [IngredientInput!]!
  steps: [StepInput!]!
}

extend type Mutation {
  createRecipe(recipe: RecipeInput!): ID!
}
`

module.exports.resolvers = {
  Mutation: {
    createRecipe (root, { recipe: { ingredients, steps, ...recipe } }, { user }) {
      if (!user) {
        return Promise.reject(new Error('Unauthenticated'))
      }

      return database.transaction(transaction =>
        Recipe.create({ ...recipe, creator: user.id }, { transaction })
          .then((recipe) =>
            Promise.all([
              Step.bulkCreate(addIndexIdAndRecipeId(recipe, steps), { transaction }),
              Ingredient.bulkCreate(addIndexIdAndRecipeId(recipe, ingredients), { transaction })
            ])
              .then(() => recipe)
          )
      )
        .then(recipe => {
          logger.verbose('A recipe was created', {
            id: recipe.id,
            name: recipe.name
          })

          return recipe.id
        })
    }
  }
}
