'use strict'

const core = require('@aws-cdk/core')

class Api extends core.Stack {
  /**
   * @param {import('@aws-cdk/core').Construct} scope
   * @param {string} id
   * @param {import('@aws-cdk/core').StackProps} [props]
   */
  constructor(scope, id, props) {
    super(scope, id, props)
  }
}

module.exports = Api
