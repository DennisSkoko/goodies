const ErrorCode = require('./ErrorCode')
const HttpError = require('./HttpError')

class UserSuspended extends HttpError {
  constructor () {
    super(
      'User is suspended and is now allowed to authenticate',
      ErrorCode.UserSuspended,
      403
    )
  }
}

module.exports = UserSuspended
