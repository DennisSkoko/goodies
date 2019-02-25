const HttpError = require('../error/HttpError')
const InternalServerError = require('../error/InternalServerError')
const logger = require('../logger')

function errorHandler (err, req, res, next) {
  if (err instanceof HttpError) return next(err)

  logger.error(err)
  next(new InternalServerError())
}

module.exports = errorHandler
