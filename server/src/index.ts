import { settings } from '../conf/settings'
import { app } from './app'
import { logger } from './logger'

app.listen(settings.port, (): void => {
  logger.info('Server has started', {
    port: settings.port
  })
})
