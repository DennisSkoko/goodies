import React from 'react'
import PropTypes from 'prop-types'
import useValidator, { rules } from '../../hooks/useValidator'
import useInputState from '../../hooks/useInputState'
import Button from '../../ui/Button'
import InputText from '../../ui/InputText'

function CreateAccountForm ({ onSubmit, ...props }) {
  const [email, setEmail] = useInputState('')
  const emailError = useValidator(email, [rules.isEmail])

  const [name, setName] = useInputState('')
  const nameError = useValidator(name, [
    rules.isRequired,
    rules.isLength({ min: 3, max: 40 })
  ])

  const [password, setPassword] = useInputState('')
  const passwordError = useValidator(password, [rules.isRequired])

  const [confirm, setConfirm] = useInputState('')
  const confirmError = useValidator(confirm, [
    rules.isEqual('password', password)
  ], [password])

  const isFormValid = [emailError, nameError, passwordError, confirmError]
    .every(error => !error)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit && isFormValid) onSubmit({ email, name, password })
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <InputText
        id='createaccount-email'
        label='Email'
        type='email'
        value={email}
        onChange={setEmail}
        error={emailError}
      />

      <InputText
        id='createaccount-name'
        label='Name'
        value={name}
        onChange={setName}
        error={nameError}
      />

      <InputText
        id='createaccount-password'
        label='Password'
        type='password'
        value={password}
        onChange={setPassword}
        error={passwordError}
      />

      <InputText
        id='createaccount-confirm'
        label='Confirm password'
        type='password'
        value={confirm}
        onChange={setConfirm}
        error={confirmError}
      />

      <Button
        type='submit'
        disabled={!isFormValid}
        wide
      >
        Create my account
      </Button>
    </form>
  )
}

CreateAccountForm.propTypes = {
  onSubmit: PropTypes.func
}

CreateAccountForm.defaultProps = {
  onSubmit: null
}

export default CreateAccountForm
