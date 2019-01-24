import { useContext } from 'react'
import AuthContext from './AuthContext'

const FAKE_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

function useAuth () {
  const { token, setToken } = useContext(AuthContext)

  return {
    signedIn: !!token,

    signIn () {
      return new Promise(resolve => {
        setTimeout(() => { resolve(FAKE_JWT) }, 800)
      })
        .then(token => {
          setToken(token)
        })
    },

    signOut () {
      return new Promise(resolve => {
        setTimeout(() => { resolve() }, 200)
      })
        .then(() => {
          setToken(null)
        })
    }
  }
}

export default useAuth
