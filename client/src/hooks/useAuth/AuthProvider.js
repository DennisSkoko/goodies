import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AuthContext from './AuthContext'
import storage from './storage'

function AuthProvider ({ children }) {
  const token = storage.get()
  const [user, setUser] = useState(token ? { token } : null)

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
