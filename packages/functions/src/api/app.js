const express = require('express')
const middlewares = require('./middlewares')

const app = express()

middlewares.forEach(middleware => {
  app.use(middleware)
})

module.exports = app
