import * as bcrypt from 'bcrypt'

import { settings } from '../conf/settings'

export const hasher = {
  hash (password: string) {
    return bcrypt.hash(password, settings.hasher.saltRounds)
  }
}
