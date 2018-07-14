import { RequestHandler, ErrorRequestHandler } from 'express'

import { errorHandler } from './error-handler'
import { notFoundHandler } from './not-found-handler'

export const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
  notFoundHandler,
  errorHandler
]
