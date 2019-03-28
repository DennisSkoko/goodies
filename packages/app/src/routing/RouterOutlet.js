import React from 'react'
import { Router } from '@reach/router'
import useAuth from '../hooks/useAuth'
import CreateAccount from '../pages/CreateAccount'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/SignIn'
import Welcome from '../pages/Welcome'

function RouterOutlet () {
  const { signedIn } = useAuth()

  return (
    <Router>
      {!signedIn && <Welcome path='/' />}
      {!signedIn && <CreateAccount path='/create-account' />}
      {!signedIn && <SignIn path='/sign-in' />}
      <NotFound default />
    </Router>
  )
}

export default RouterOutlet
