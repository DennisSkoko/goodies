import React from 'react'
import PropTypes from 'prop-types'
import useInputState from '../../hooks/useInputState'
import Button from '../../ui/Button'
import InputText from '../../ui/InputText'

function CreateAccountForm ({ onSubmit, ...props }) {
  const [email, setEmail] = useInputState('')
  const [name, setName] = useInputState('')
  const [password, setPassword] = useInputState('')
  const [confirm, setConfirm] = useInputState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit({ email, name, password })
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
      <InputText
        id='createaccount-email'
        label='Email'
        type='email'
        value={email}
        onChange={setEmail}
      />

      <InputText
        id='createaccount-name'
        label='Name'
        value={name}
        onChange={setName}
      />

      <InputText
        id='createaccount-password'
        label='Password'
        type='password'
        value={password}
        onChange={setPassword}
      />

      <InputText
        id='createaccount-confirm'
        label='Confirm password'
        type='password'
        value={confirm}
        onChange={setConfirm}
      />

      <Button wide>
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
