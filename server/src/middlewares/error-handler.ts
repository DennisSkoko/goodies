import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import { logger } from '../logger'

export const errorHandler: ErrorRequestHandler =
  (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    logger.error('Failed to handle a request', {
      error: err.message
    })

    res.json({
      status: 'Internal Server Error'
    })
  }
