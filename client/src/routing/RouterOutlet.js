import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './routes'

function RouterOutlet () {
  return (
    <Switch>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Switch>
  )
}

export default RouterOutlet
