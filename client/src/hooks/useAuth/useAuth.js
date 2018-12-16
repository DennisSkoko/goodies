import { useContext } from 'react'
import gql from 'graphql-tag'
import api from '../../api/client'
import AuthContext from './AuthContext'
import EmailNotRegistered from './EmailNotRegistered'
import PasswordIncorrect from './PasswordIncorrect'

const USER_NOT_REGISTERED_ERROR = 'GraphQL error: Email not registered'
const PASSWORD_INCORRECT_ERROR = 'GraphQL error: Incorrect password'

const mutation = gql`
  mutation($email: String!, $password: String!) {
    authenticate(email: $email, password: $password)
  }
`

function useAuth () {
  const { user, setUser } = useContext(AuthContext)

  return {
    user,
    signedIn: !!user,

    signIn ({ email, password }) {
      return api.mutate({ mutation, variables: { email, password } })
        .then(result => result.data.authenticate)
        .then(token => {
          setUser({ token })
        })
        .catch(err => {
          switch (err.message) {
            case USER_NOT_REGISTERED_ERROR:
              throw new EmailNotRegistered()

            case PASSWORD_INCORRECT_ERROR:
              throw new PasswordIncorrect()

            default:
              throw err
          }
        })
    },

    signOut () {
      setUser(null)
    }
  }
}

export default useAuth
