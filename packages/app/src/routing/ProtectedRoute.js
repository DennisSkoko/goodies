import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function ProtectedRoute ({ requiresAuth, component: Component, ...props }) {
  const { signedIn } = useAuth()

  return (
    <Route
      {...props}
      render={props => signedIn === requiresAuth
        ? <Component {...props} />
        : <Redirect to={requiresAuth ? '/sign-in' : '/dashboard'} />}
    />
  )
}

ProtectedRoute.propTypes = {
  requiresAuth: PropTypes.bool.isRequired,
  component: PropTypes
    .oneOfType([
      PropTypes.element,
      PropTypes.func
    ])
    .isRequired
}

export default ProtectedRoute
