import * as path from 'path'
import * as dotenv from 'dotenv'

import { LoggerOptions } from 'winston'

// Will be the server folder after building
const root = path.resolve(__dirname, '../..')

dotenv.config({
  path: path.join(root, '.env')
})

export interface Settings {
  port: string | number
  logger: LoggerOptions
}

export const settings: Settings = {
  port: process.env.PORT || 80,

  logger: {
    level: process.env.LOG_LEVEL || 'info'
  }
}
