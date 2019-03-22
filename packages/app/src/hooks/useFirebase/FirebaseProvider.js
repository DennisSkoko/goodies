import React from 'react'
import PropTypes from 'prop-types'
import FirebaseContext from './FirebaseContext'

function AuthProvider ({ app, ...props }) {
  return <FirebaseContext.Provider {...props} value={app} />
}

AuthProvider.propTypes = {
  app: PropTypes.any.isRequired
}

export default AuthProvider
