import * as winston from 'winston'

import { settings } from '../conf/settings'

export const logger = winston.createLogger({
  level: settings.logger.level,
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console()
  ]
})
