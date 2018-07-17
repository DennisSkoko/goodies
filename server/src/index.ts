import 'reflect-metadata'

import { settings } from '../conf/settings'
import { app } from './app'
import { connection as db } from './db/connection'
import { logger } from './logger'

db.connect()
  .then(() => {
    logger.info('Successfully connected to the database')
  })
  .catch((err: Error) => {
    logger.error('Failed to connect to the database', {
      error: err.message
    })
  })

app.listen(settings.port, (): void => {
  logger.info('Server has started', {
    port: settings.port
  })
})
