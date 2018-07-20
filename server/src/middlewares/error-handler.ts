import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

import { logger } from '../logger'
import { UnprocessableEntity } from '../errors'

export const errorHandler: ErrorRequestHandler =
  (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof UnprocessableEntity) {
      res.status(422).json(err.fieldErrors)
      return
    }

    logger.error('Failed to handle a request', {
      error: err.message
    })

    res.json({
      status: 'Internal Server Error'
    })
  }
