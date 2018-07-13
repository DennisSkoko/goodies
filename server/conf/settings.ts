import * as path from 'path'
import * as dotenv from 'dotenv'

// Will be the server folder after building
const root = path.resolve(__dirname, '../..')

dotenv.config({
  path: path.join(root, '.env')
})

export const settings = {
  port: process.env.PORT || 80,

  logger: {
    level: process.env.LOG_LEVEL || 'info'
  }
}
