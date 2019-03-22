import { useContext } from 'react'
import AuthContext from './AuthContext'
import useFirebase from '../useFirebase'

function useAuth () {
  const { auth } = useFirebase()
  const { user, setUser } = useContext(AuthContext)

  return {
    signedIn: !!user,

    async signIn ({ email, password }) {
      const { user } = await auth.signInWithEmailAndPassword(email, password)

      setUser(user)
      return user
    },

    async signUp ({ email, password }) {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      user.sendEmailVerification()
        .catch(err => {
          console.error('Failed to send a verification email', err)
        })

      setUser(user)
      return user
    },

    async signOut () {
      await auth.signOut()
      setUser(null)
    }
  }
}

export default useAuth
