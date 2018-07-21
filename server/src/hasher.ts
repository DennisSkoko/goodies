import * as bcrypt from 'bcrypt'

import { settings } from '../conf/settings'

export const hasher = {
  hash (password: string) {
    return bcrypt.hash(password, settings.hasher.saltRounds)
  },

  compare (plain: string, password: string) {
    return bcrypt.compare(plain, password)
  }
}
