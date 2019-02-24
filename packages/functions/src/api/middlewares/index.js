const cors = require('cors')
const bodyParser = require('body-parser')
const auth = require('./auth')
const errorDispatcher = require('./errorDispatcher')
const errorHandler = require('./errorHandler')
const notFound = require('./notFound')

module.exports = [
  cors({ origin: true }),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  auth,
  notFound,
  errorHandler,
  errorDispatcher
]
