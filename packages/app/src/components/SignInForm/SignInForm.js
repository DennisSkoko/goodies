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
  const passwordError = useValidator(password, [rules.isRequired])

  const isFormValid = [emailError, passwordError]
    .every(error => !error)

  const handleSubmit = event => {
    event.preventDefault()
    if (onSubmit && isFormValid) onSubmit({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <InputText
        label='Email'
        id='signin-email'
        type='email'
        value={email}
        onChange={setEmail}
        error={emailError}
      />

      <InputText
        label='Password'
        id='signin-password'
        type='password'
        value={password}
        onChange={setPassword}
        error={passwordError}
      />

      <Button
        type='submit'
        disabled={!isFormValid}
        wide
      >
        Sign me in
      </Button>
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
