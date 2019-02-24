function errorDispatcher (err, req, res, next) {
  res.status(err.httpCode).json({
    message: err.message,
    code: err.code
  })
}

module.exports = errorDispatcher
