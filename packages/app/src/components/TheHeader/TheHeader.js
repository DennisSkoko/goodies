import React from 'react'
import useAuth from '../../hooks/useAuth'
import Header from '../../ui/Header'
import HeaderLink from '../../ui/HeaderLink'

function TheHeader () {
  const { signedIn } = useAuth()

  return (
    <Header title='Goodies'>
      {!signedIn && <HeaderLink to='/' exact>Welcome</HeaderLink>}
      {!signedIn && <HeaderLink to='/sign-in'>Sign in</HeaderLink>}
      {signedIn && <HeaderLink to='/dashboard'>Dashboard</HeaderLink>}
      {signedIn && <HeaderLink to='/profile'>Profile</HeaderLink>}
    </Header>
  )
}

export default TheHeader
