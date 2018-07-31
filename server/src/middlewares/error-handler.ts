import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

import { logger } from '../logger'
import { HttpError } from '../errors'

export const errorHandler: ErrorRequestHandler =
  (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof HttpError) {
      res
        .status(err.getStatusCode())
        .json(err.getResponseBody())
      return
    }

    logger.error('Failed to handle a request', { error: err.message })
    res.status(500).json({ status: 'Internal Server Error' })
  }
