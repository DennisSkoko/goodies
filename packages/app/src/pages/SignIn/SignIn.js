import React from 'react'
import SignInForm from '../../components/SignInForm'
import styles from './SignIn.module.scss'

function SignIn () {
  return (
    <div className={styles.wrapper}>
      <SignInForm />
    </div>
  )
}

export default SignIn
