import React from 'react'
import SignInForm from '../../components/SignInForm'
import Link from '../../ui/Link'
import SectionFullPage from '../../ui/SectionFullPage'

function SignIn () {
  const handleSubmit = (form) => {
    console.log('Authenticating')
    console.log(form)
  }

  return (
    <SectionFullPage>
      <SignInForm onSubmit={handleSubmit} />
      <Link href='/create-account' variant='block-centered' spacing>
        Don't have an account?
      </Link>
    </SectionFullPage>
  )
}

export default SignIn
