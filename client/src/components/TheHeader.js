import React from 'react'
import useAuth from '../hooks/useAuth'
import Header from '../ui/Header'
import HeaderNav from '../ui/HeaderNav'
import HeaderNavLink from '../ui/HeaderNavLink'
import HeaderTitle from '../ui/HeaderTitle'

function TheHeader () {
  const { signedIn } = useAuth()

  return (
    <Header>
      <HeaderTitle>Goodies</HeaderTitle>
      <HeaderNav>
        <HeaderNavLink to='/' exact>Home</HeaderNavLink>
        <HeaderNavLink to='/recipe/browse'>Browse</HeaderNavLink>
        {!signedIn && <HeaderNavLink to='/sign-in'>Sign in</HeaderNavLink>}
      </HeaderNav>
    </Header>
  )
}

export default TheHeader
