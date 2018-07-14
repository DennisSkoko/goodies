import { RequestHandler, ErrorRequestHandler } from 'express'

import { errorHandler } from './error-handler'
import { notFoundHandler } from './not-found-handler'
import { routers } from './routers'

export const middlewares: Array<RequestHandler | ErrorRequestHandler> = [
  ...routers,
  notFoundHandler,
  errorHandler
]
