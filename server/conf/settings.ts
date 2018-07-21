import * as path from 'path'
import * as dotenv from 'dotenv'
import { ConnectionOptions } from 'typeorm'
import { SignOptions } from 'jsonwebtoken'

// Will be the server folder after building
const root = path.resolve(__dirname, '../..')

dotenv.config({
  path: path.join(root, '.env')
})

export interface Settings {
  port: string | number
  database: ConnectionOptions
  hasher: {
    saltRounds: number
  },
  jwt: {
    secret: string,
    options: SignOptions
  },
  logger: {
    level: string
  }
}

export const settings: Settings = {
  port: process.env.PORT
    ? parseInt(process.env.PORT)
    : 80,

  database: {
    type: 'mariadb',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT
      ? parseInt(process.env.DB_PORT)
      : 3306,
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'goodies',
    entities: [
      path.join(root, 'build/src/db/entities/**/*.js')
    ]
  },

  hasher: {
    saltRounds: 10
  },

  jwt: {
    secret: process.env.JWT_SECRET || 'goodies-jwt-secret',
    options: {
      expiresIn: '4h'
    }
  },

  logger: {
    level: process.env.LOG_LEVEL || 'info'
  }
}
