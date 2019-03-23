import React from 'react'
import SignInForm from '../../components/SignInForm'
import useAuth, { AuthErrorCode } from '../../hooks/useAuth'
import useToast from '../../hooks/useToast'
import Heading from '../../ui/Heading'
import Link from '../../ui/Link'
import SectionFullPage from '../../ui/SectionFullPage'

const warningErrors = [
  AuthErrorCode.USER_NOT_FOUND,
  AuthErrorCode.WRONG_PASSWORD
]

function SignIn () {
  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = async ({ email, password }) => {
    try {
      await signIn({ email, password })
    } catch (err) {
      addToast({
        type: warningErrors.includes(err.code) ? 'warning' : 'danger',
        title: 'Failed to authenticate',
        content: err.message
      })
    }
  }

  return (
    <SectionFullPage>
      <Heading as='h2' type='h3' centered>Sign in</Heading>
      <SignInForm onSubmit={handleSubmit} />
      <Link href='/create-account' variant='block-centered' spacing>
        Don't have an account?
      </Link>
    </SectionFullPage>
  )
}

export default SignIn
