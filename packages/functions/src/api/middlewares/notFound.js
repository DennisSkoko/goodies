const NotFound = require('../error/NotFound')

function notFound (req, res, next) {
  next(new NotFound())
}

module.exports = notFound
