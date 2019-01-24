import React, { useState } from 'react'
import AuthContext from './AuthContext'

function AuthProvider (props) {
  const [token, setToken] = useState(null)
  return <AuthContext.Provider {...props} value={{ token, setToken }} />
}

export default AuthProvider
