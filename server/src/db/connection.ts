import { ConnectionManager } from 'typeorm'

import { settings } from '../../conf/settings'

const manager = new ConnectionManager()

export const connection = manager.create(settings.database)
connection.connect()
