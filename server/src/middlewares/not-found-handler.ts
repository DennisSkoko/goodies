import { Request, Response, NextFunction, RequestHandler } from 'express'

export const notFoundHandler: RequestHandler =
  (_req: Request, res: Response, _next: NextFunction) => {
    res.json({
      status: 'Not Found'
    })
  }
