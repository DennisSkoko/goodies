import * as express from 'express'

import { errorHandler } from './error-handler'
import { notFoundHandler } from './not-found-handler'
import { routers } from './routers'

export const middlewares: Array<express.RequestHandler | express.ErrorRequestHandler> = [
  express.json(),
  express.urlencoded({ extended: true }),
  ...routers,
  notFoundHandler,
  errorHandler
]
