'use strict'

require('dotenv').config()

const App = require('./App')

if (!process.env.GOODIES_STACK_NAME) {
  throw new Error('You must specify the `GOODIES_STACK_NAME` env variable')
}

new App({
  name: process.env.GOODIES_STACK_NAME,
  env: {
    account: process.env.CDK_DEPLOY_ACCOUNT,
    region: process.env.CDK_DEPLOY_REGION
  }
})
