const ErrorCode = require('./ErrorCode')
const HttpError = require('./HttpError')

class UserDoesNotExists extends HttpError {
  constructor () {
    super(
      'There is no user registered with that email',
      ErrorCode.UserDoesNotExists,
      401
    )
  }
}

module.exports = UserDoesNotExists
