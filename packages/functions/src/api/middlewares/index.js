const cors = require('cors')
const bodyParser = require('body-parser')
const auth = require('./auth')

module.exports = [
  cors({ origin: true }),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  auth
]
