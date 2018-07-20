import { Request, Response, NextFunction, RequestHandler } from 'express'

import { NotFound } from '../errors'

export const notFoundHandler: RequestHandler =
  (_req: Request, _res: Response, next: NextFunction) => {
    next(new NotFound())
  }
