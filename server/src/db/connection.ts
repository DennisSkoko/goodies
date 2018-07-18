import { getConnectionManager } from 'typeorm'

import { settings } from '../../conf/settings'

export const connection = getConnectionManager().create(settings.database)
