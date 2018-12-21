import React from 'react'
import styled from 'styled-components'
import useAuth, { EmailNotRegistered, PasswordIncorrect } from '../hooks/useAuth'
import Container from '../ui/Container'
import SignInForm from '../components/SignInForm'
import useToast from '../hooks/useToast'

const StyledSignInForm = styled(SignInForm)`
  margin-top: ${({ theme }) => theme.spacing.xl};
`

function SignIn () {
  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = ({ email, password }) => {
    signIn({ email, password })
      .catch(err => {
        if (err instanceof EmailNotRegistered) {
          addToast({
            status: 'warning',
            title: 'Failed to sign in',
            content: 'The email you have entered is not registered as a user.'
          })
        } else if (err instanceof PasswordIncorrect) {
          addToast({
            status: 'warning',
            title: 'Failed to sign in',
            content: 'The password you have given is incorrect.'
          })
        } else {
          addToast({
            status: 'danger',
            title: 'Failed to sign in',
            content: 'Failed to sign in to the server, please try again later' +
              ' or contact us if problem continues.'
          })
        }
      })
  }

  return (
    <Container>
      <StyledSignInForm onSubmit={handleSubmit} />
    </Container>
  )
}

export default SignIn
