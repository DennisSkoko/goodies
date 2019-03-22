import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import CreateAccountForm from '../../components/CreateAccountForm'
import useAuth from '../../hooks/useAuth'
import useToast from '../../hooks/useToast'
import Heading from '../../ui/Heading'
import Link from '../../ui/Link'
import SectionFullPage from '../../ui/SectionFullPage'

function CreateAccount ({ history }) {
  const { signUp } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = async ({ email, password }) => {
    try {
      await signUp({ email, password })
      history.push('/dashboard')
    } catch (err) {
      addToast({
        type: 'danger',
        title: 'Failed to create an account',
        content: err.message
      })
    }
  }

  return (
    <SectionFullPage>
      <Heading as='h2' type='h3' centered>Create account</Heading>
      <CreateAccountForm onSubmit={handleSubmit} />
      <Link href='/sign-in' variant='block-centered' spacing>
        Already have an account?
      </Link>
    </SectionFullPage>
  )
}

CreateAccount.propTypes = {
  history: PropTypes.object.isRequired
}

export default withRouter(CreateAccount)
