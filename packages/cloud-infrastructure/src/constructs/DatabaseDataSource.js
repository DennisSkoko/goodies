'use strict'

const core = require('@aws-cdk/core')
const appsync = require('@aws-cdk/aws-appsync')
const Function = require('./Function')

class DatabaseDataSource extends core.Construct {
  /**
   *
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {import('./DatabaseDataSource.types').ConstructorProps} props
   */
  constructor(scope, id, props) {
    super(scope, id)

    /** @readonly */
    this.managerFunc = new Function(this, `${id}ManagerFunction`, {
      project: 'database',
      handler: 'manager',
      vpc: props.vpc
    })

    /** @readonly */
    this.dataSource = new appsync.LambdaDataSource(this, `${id}DataSource`, {
      lambdaFunction: this.managerFunc,
      api: props.api
    })

    this.dataSource.createResolver
  }

  /**
   * @param {import('./DatabaseDataSource.types').CreateResolverProps} props
   */
  createResolver(props) {
    return this.dataSource.createResolver({
      ...props,
      requestMappingTemplate: appsync.MappingTemplate.lambdaRequest(
        JSON.stringify(props.payload)
      ),
      responseMappingTemplate: appsync.MappingTemplate.lambdaResult()
    })
  }
}

module.exports = DatabaseDataSource
