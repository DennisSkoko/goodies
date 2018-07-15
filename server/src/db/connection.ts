import { ConnectionManager } from 'typeorm'

import { settings } from '../../conf/settings'
import { logger } from '../logger'

const manager = new ConnectionManager()

export const connection = manager.create(settings.database)

connection.connect()
  .then(() => {
    logger.info('Successfully connected to the database')
  })
  .catch((err: Error) => {
    logger.error('Failed to connect to the database', {
      error: err.message
    })
  })
