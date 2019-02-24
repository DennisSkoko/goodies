const HttpError = require('../error/HttpError')
const InternalServerError = require('../error/InternalServerError')

function errorHandler (err, req, res, next) {
  if (err instanceof HttpError) return next(err)

  console.log(Object.getPrototypeOf(err).constructor)

  console.error(err)
  next(new InternalServerError())
}

module.exports = errorHandler
