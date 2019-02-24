const ErrorCode = require('./ErrorCode')
const HttpError = require('./HttpError')

class UserExists extends HttpError {
  constructor () {
    super(
      'There already is a user registered with that email',
      ErrorCode.UserExists,
      401
    )
  }
}

module.exports = UserExists
