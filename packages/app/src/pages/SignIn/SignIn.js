import React from 'react'
import SignInForm from '../../components/SignInForm'
import Heading from '../../ui/Heading'
import Link from '../../ui/Link'
import SectionFullPage from '../../ui/SectionFullPage'

function SignIn () {
  const handleSubmit = (form) => {
    console.log('Authenticating')
    console.log(form)
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
