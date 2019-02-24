const ErrorCode = require('./ErrorCode')
const HttpError = require('./HttpError')

class InternalServerError extends HttpError {
  constructor () {
    super(
      'An error occured when trying to process your request',
      ErrorCode.ServerInternal,
      500
    )
  }
}

module.exports = InternalServerError
