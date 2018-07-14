import * as express from 'express'

import { middlewares } from './middlewares'

export const app = express()

middlewares.forEach(middleware => {
  app.use(middleware)
})
