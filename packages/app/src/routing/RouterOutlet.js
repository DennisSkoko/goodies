import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import routes from './routes'

function RouterOutlet () {
  return (
    <Switch>
      {routes.map(({ auth, ...route }) => auth !== undefined
        ? <ProtectedRoute requiresAuth={auth} {...route} />
        : <Route {...route} />
      )}
    </Switch>
  )
}

export default RouterOutlet
