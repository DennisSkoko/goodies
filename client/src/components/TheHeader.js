import React from 'react'
import Header from '../ui/Header'
import HeaderNav from '../ui/HeaderNav'
import HeaderNavLink from '../ui/HeaderNavLink'
import HeaderTitle from '../ui/HeaderTitle'

function TheHeader () {
  return (
    <Header>
      <HeaderTitle>Goodies</HeaderTitle>
      <HeaderNav>
        <HeaderNavLink to='/' exact>Home</HeaderNavLink>
        <HeaderNavLink to='/about'>About</HeaderNavLink>
        <HeaderNavLink to='/contact'>Contact</HeaderNavLink>
      </HeaderNav>
    </Header>
  )
}

export default TheHeader
