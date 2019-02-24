const ErrorCode = require('./ErrorCode')
const HttpError = require('./HttpError')

class NotFound extends HttpError {
  constructor () {
    super('The resource does not exists', ErrorCode.ResourceDoesNotExists, 404)
  }
}

module.exports = NotFound
