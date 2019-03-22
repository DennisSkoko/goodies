import React, { useState } from 'react'
import useFirebase from '../useFirebase'
import AuthContext from './AuthContext'

function AuthProvider (props) {
  const { auth } = useFirebase()
  const [user, setUser] = useState(auth.currentUser)

  return <AuthContext.Provider {...props} value={{ user, setUser }} />
}

export default AuthProvider
