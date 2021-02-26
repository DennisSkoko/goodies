'use strict'

const uuid = require('uuid')
const getDatabase = require('./getDatabase')

module.exports = {
  /**
   * @param {import('./recipe.types').RecipeGetParams} params
   * @returns {Promise<import('./recipe.types').Recipe>}
   */
  async get({ id }) {
    const db = /** @type {any} */ (await getDatabase())

    return db('Recipes').select(['id', 'name']).where({ id }).first()
  },

  /**
   * @param {import('./recipe.types').RecipeListParams} params
   * @returns {Promise<import('./recipe.types').Recipe[]>}
   */
  async list(params) {
    const db = /** @type {any} */ (await getDatabase())

    return db('Recipes').select(['id', 'name'])
  },

  /**
   * @param {import('./recipe.types').RecipeCreateParams} params
   * @returns {Promise<import('./recipe.types').Recipe>}
   */
  async create({ name }) {
    const db = /** @type {any} */ (await getDatabase())
    const id = uuid.v4()

    await db('Recipes').insert({ id, name })

    return { id, name }
  }
}
