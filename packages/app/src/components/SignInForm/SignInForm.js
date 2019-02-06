import React from 'react'
import PropTypes from 'prop-types'
import useValidator, { rules } from '../../hooks/useValidator'
import useInputState from '../../hooks/useInputState'
import Button from '../../ui/Button'
import InputText from '../../ui/InputText'

function SignInForm ({ onSubmit, ...props }) {
  const [email, setEmail] = useInputState('')
  const emailError = useValidator(email, [rules.isEmail])
  const [password, setPassword] = useInputState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (onSubmit) onSubmit({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <InputText
        label='Email'
        id='signin-email'
        type='email'
        value={email}
        error={emailError}
        onChange={setEmail}
      />

      <InputText
        label='Password'
        id='signin-password'
        type='password'
        value={password}
        onChange={setPassword}
      />

      <Button type='submit' wide>Sign me in</Button>
    </form>
  )
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func
}

SignInForm.defaultProps = {
  onSubmit: null
}

export default SignInForm
