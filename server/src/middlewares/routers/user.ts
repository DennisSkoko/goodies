import { Router, Request, Response } from 'express'

export const user = Router()

user.get('/user', (_req: Request, res: Response) => {
  res.json([
    {
      id: 1,
      name: 'Dennis Skoko'
    }
  ])
})
