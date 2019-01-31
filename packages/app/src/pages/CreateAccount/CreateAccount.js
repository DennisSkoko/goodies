import React from 'react'
import CreateAccountForm from '../../components/CreateAccountForm'
import Link from '../../ui/Link'
import SectionFullPage from '../../ui/SectionFullPage'

function CreateAccount () {
  const handleSubmit = (form) => {
    console.log('Creating account')
    console.log(form)
  }

  return (
    <SectionFullPage>
      <CreateAccountForm onSubmit={handleSubmit} />
      <Link href='/sign-in' variant='block-centered' spacing>
        Already have an account?
      </Link>
    </SectionFullPage>
  )
}

export default CreateAccount
