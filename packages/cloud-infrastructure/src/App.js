'use strict'

const core = require('@aws-cdk/core')
const Api = require('./stacks/Api')

class App extends core.App {
  constructor() {
    super()

    new Api(this, 'GoodiesApi')
  }
}

module.exports = App
