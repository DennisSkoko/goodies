const express = require('express')
const bodyParser = require('body-parser')
const supertest = require('supertest')
const notFound = require('../../../src/api/middlewares/notFound')
const errorHandler = require('../../../src/api/middlewares/errorHandler')
const errorDispatcher = require('../../../src/api/middlewares/errorDispatcher')

function request (router, debug) {
  const app = express()

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(router)
  app.use(notFound)

  if (debug) {
    app.use((err, req, res, next) => {
      console.error(err)
      next(err)
    })
  }

  app.use(errorHandler)
  app.use(errorDispatcher)

  return supertest(app)
}

module.exports = request
