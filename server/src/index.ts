import { settings } from '../conf/settings'
import { app } from './app'

app.listen(settings.port, (): void => {
  console.log('Server started on port: ' + settings.port)
})
