import React from 'react'
import useInputState from '../../hooks/useInputState'
import Button from '../../ui/Button'
import Heading from '../../ui/Heading'
import InputText from '../../ui/InputText'
import styles from './SignInForm.module.scss'

function SignInForm () {
  const [email, setEmail] = useInputState('')
  const [password, setPassword] = useInputState('')

  return (
    <div className={styles.wrapper}>
      <Heading type='h2' centered>Sign in</Heading>

      <form>
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

export default SignInForm
