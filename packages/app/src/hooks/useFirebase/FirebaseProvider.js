import React from 'react'
import PropTypes from 'prop-types'
import FirebaseContext from './FirebaseContext'

function FirebaseProvider ({ app, ...props }) {
  return <FirebaseContext.Provider {...props} value={app} />
}

FirebaseProvider.propTypes = {
  app: PropTypes.any.isRequired
}

export default FirebaseProvider
