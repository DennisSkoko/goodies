'use strict'

const core = require('@aws-cdk/core')
const Api = require('./stacks/Api')
const Database = require('./stacks/Database')
const Vpc = require('./stacks/Vpc')

class App extends core.App {
  /**
   * @param {import('./App.types').AppProps} props
   */
  constructor(props) {
    super()

    const vpc = new Vpc(this, `${props.name}Vpc`, { env: props.env })

    const database = new Database(this, `${props.name}Database`, {
      env: props.env,
      vpc: vpc.vpc
    })

    new Api(this, `${props.name}Api`, {
      env: props.env,
      vpc: vpc.vpc,
      database: database.instance
    })
  }
}

module.exports = App
