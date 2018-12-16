import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AuthContext from './AuthContext'

function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node
}

AuthProvider.default = {
  children: null
}

export default AuthProvider
