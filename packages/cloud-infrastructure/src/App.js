'use strict'

const core = require('@aws-cdk/core')
const Main = require('./stacks/Main')

class App extends core.App {
  /**
   * @param {import('./App.types').AppProps} props
   */
  constructor(props) {
    super()

    new Main(this, props.name, { env: props.env })
  }
}

module.exports = App
