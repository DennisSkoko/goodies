const ErrorCode = require('./ErrorCode')
const HttpError = require('./HttpError')

class AuthInvalidPassword extends HttpError {
  constructor () {
    super('The given password is incorrect', ErrorCode.AuthInvalidPassword, 401)
  }
}

module.exports = AuthInvalidPassword
