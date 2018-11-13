'use strict'

const Ingredient = require('../../../src/db/ingredient')
const Recipe = require('../../../src/db/recipe')
const Step = require('../../../src/db/step')
const model = require('../../../src/graphql/models/recipe')
const database = require('../../../src/database')

const mutation = model.resolvers.Mutation

describe('mutation.createRecipe', () => {
  beforeAll(() => {
    jest.spyOn(Ingredient, 'bulkCreate')
      .mockResolvedValue({})

    jest.spyOn(Recipe, 'create')
      .mockResolvedValue({ id: '<recipe id>' })

    jest.spyOn(Step, 'bulkCreate')
      .mockResolvedValue({})

    jest.spyOn(database, 'transaction')
      .mockImplementation(action => action('<transaction>'))
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('rejects when user is not provided', () => {
    const promise = mutation.createRecipe(null, { recipe: {} }, {})
    return expect(promise).rejects.toThrow('Unauthenticated')
  })

  it('creates each provided step within the transaction', async () => {
    await mutation.createRecipe(
      null,
      {
        recipe: {
          ingredients: [],
          steps: [
            { instructions: 'foo' },
            { instructions: 'bar' },
            { instructions: 'daz' }
          ]
        }
      },
      {
        user: {
          id: '<user id>'
        }
      }
    )

    expect(Step.bulkCreate).toHaveBeenCalledWith(
      [
        { id: 1, recipe: '<recipe id>', instructions: 'foo' },
        { id: 2, recipe: '<recipe id>', instructions: 'bar' },
        { id: 3, recipe: '<recipe id>', instructions: 'daz' }
      ],
      {
        transaction: '<transaction>'
      }
    )
  })

  it('creates each provided ingredient within the transaction', async () => {
    await mutation.createRecipe(
      null,
      {
        recipe: {
          ingredients: [
            { instructions: 'foo' },
            { instructions: 'bar' },
            { instructions: 'daz' }
          ],
          steps: []
        }
      },
      {
        user: {
          id: '<user id>'
        }
      }
    )

    expect(Ingredient.bulkCreate).toHaveBeenCalledWith(
      [
        { id: 1, recipe: '<recipe id>', instructions: 'foo' },
        { id: 2, recipe: '<recipe id>', instructions: 'bar' },
        { id: 3, recipe: '<recipe id>', instructions: 'daz' }
      ],
      {
        transaction: '<transaction>'
      }
    )
  })

  it('creates the recipe with provided values within the transaction', async () => {
    await mutation.createRecipe(
      null,
      {
        recipe: {
          name: 'Foo',
          description: 'Bar',
          private: false,
          ingredients: [],
          steps: []
        }
      },
      {
        user: {
          id: '<user id>'
        }
      }
    )

    expect(Recipe.create).toHaveBeenCalledWith(
      {
        name: 'Foo',
        description: 'Bar',
        private: false,
        creator: '<user id>'
      },
      {
        transaction: '<transaction>'
      }
    )
  })

  it('returns the id of the newly created recipe', async () => {
    const result = await mutation.createRecipe(
      null,
      {
        recipe: {
          ingredients: [],
          steps: []
        }
      },
      {
        user: {
          id: '<user id>'
        }
      }
    )

    expect(result).toBe('<recipe id>')
  })
})
