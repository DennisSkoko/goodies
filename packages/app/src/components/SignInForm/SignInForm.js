import React from 'react'
import PropTypes from 'prop-types'
import useInputState from '../../hooks/useInputState'
import Button from '../../ui/Button'
import Heading from '../../ui/Heading'
import InputText from '../../ui/InputText'
import styles from './SignInForm.module.scss'

function SignInForm ({ onSubmit }) {
  const [email, setEmail] = useInputState('')
  const [password, setPassword] = useInputState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (onSubmit) onSubmit({ email, password })
  }

  return (
    <div className={styles.wrapper}>
      <Heading type='h2' centered>Sign in</Heading>

      <form onSubmit={handleSubmit}>
        <InputText
          label='Email'
          id='signin-email'
          type='email'
          value={email}
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
    </div>
  )
}

SignInForm.propTypes = {
  onSubmit: PropTypes.func
}

SignInForm.defaultProps = {
  onSubmit: null
}

export default SignInForm
