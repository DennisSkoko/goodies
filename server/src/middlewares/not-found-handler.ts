import { Request, Response, NextFunction, RequestHandler } from 'express'

export const notFoundHandler: RequestHandler =
  (_req: Request, res: Response, _next: NextFunction) => {
    res.status(404).json({
      status: 'Not Found'
    })
  }
