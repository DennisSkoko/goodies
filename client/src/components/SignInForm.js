import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useInputState from '../hooks/useInputState'
import InputText from '../ui/InputText'
import Button from '../ui/Button'

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`

function SignInForm ({ className, onSubmit }) {
  const [email, setEmail] = useInputState('')
  const [password, setPassword] = useInputState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <Form className={className} onSubmit={handleSubmit}>
      <InputText
        label='Email'
        value={email}
        onChange={setEmail}
      />

      <InputText
        label='Password'
        type='password'
        value={password}
        onChange={setPassword}
      />

      <Button type='submit' block>Sign in</Button>
    </Form>
  )
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func,
  className: PropTypes.string
}

SignInForm.defaultProps = {
  onSubmit: () => { },
  className: ''
}

export default SignInForm
