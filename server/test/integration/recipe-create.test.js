'use strict'

const request = require('supertest')
const helper = require('../helper')
const app = require('../../src/app')

let token = null

beforeAll(() =>
  helper.createUserAndGetToken({
    name: 'Example',
    email: 'create-recipe@example.com',
    password: 'secret'
  })
    .then(res => {
      token = res
    })
)

afterEach(() => helper.clearDatabase())

it('creates a user', () => {
  return request(app.callback())
    .post(helper.getGraphqlEnpoint())
    .send({
      query: `
        mutation($recipe: RecipeInput!) {
          createRecipe(recipe: $recipe)
        }
      `,
      variables: {
        recipe: {
          name: 'Foo',
          description: 'Bar',
          private: false,
          ingredients: [
            { name: 'Baz' },
            { name: 'Biz' },
            { name: 'Boz' }
          ],
          steps: [
            { instructions: 'Daz' },
            { instructions: 'Diz' },
            { instructions: 'Doz' }
          ]
        }
      }
    })
    .set('Authorization', 'Bearer ' + token)
    .expect(200)
    .then(({ body }) => {
      expect(body.data.createRecipe).toBeDefined()
      expect(body.errors).not.toBeDefined()
    })
})
