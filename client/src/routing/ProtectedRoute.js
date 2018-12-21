import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function ProtectedRoute ({ requiresAuth, component: Component, ...props }) {
  const { signedIn } = useAuth()

  return (
    <Route
      {...props}
      render={props => signedIn === requiresAuth
        ? <Component {...props} />
        : <Redirect to={requiresAuth ? '/sign-in' : '/'} />}
    />
  )
}

export default ProtectedRoute
