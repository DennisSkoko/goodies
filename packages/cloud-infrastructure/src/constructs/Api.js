'use strict'

const path = require('path')
const core = require('@aws-cdk/core')
const appsync = require('@aws-cdk/aws-appsync')
const DatabaseDataSource = require('../constructs/DatabaseDataSource')

class Api extends core.Construct {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {import('./Api.types').ApiProps} props
   */
  constructor(scope, id, props) {
    super(scope, id)

    if (!props.database.secret) {
      throw new Error('The given database must have a secret associated')
    }

    const api = new appsync.GraphqlApi(this, `${id}Api`, {
      name: id,
      schema: appsync.Schema.fromAsset(
        path.join(__dirname, '../res/schema.gql')
      ),
      authorizationConfig: {
        defaultAuthorization: {
          authorizationType: appsync.AuthorizationType.API_KEY,
        },
      },
      logConfig: {
        fieldLogLevel: process.env.NODE_ENV === 'production'
          ? appsync.FieldLogLevel.ERROR
          : appsync.FieldLogLevel.ALL
      }
    })

    const dsDatabase = new DatabaseDataSource(this, `${id}Database`, {
      vpc: props.vpc,
      api,
      database: props.database
    })

    dsDatabase.createResolver({
      typeName: 'Query',
      fieldName: 'recipe',
      payload: {
        action: 'get',
        props: {
          id: '$util.toJson($ctx.args.id)'
        }
      }
    })

    dsDatabase.createResolver({
      typeName: 'Query',
      fieldName: 'recipes',
      payload: {
        action: 'list',
        props: {}
      }
    })

    dsDatabase.createResolver({
      typeName: 'Mutation',
      fieldName: 'createRecipe',
      payload: {
        action: 'create',
        props: {
          recipe: '$ctx.args.recipe'
        }
      }
    })
  }
}

module.exports = Api
