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
        <HeaderNavLink href='#/'>Home</HeaderNavLink>
        <HeaderNavLink href='#/'>About</HeaderNavLink>
        <HeaderNavLink href='#/'>Contact</HeaderNavLink>
      </HeaderNav>
    </Header>
  )
}

export default React.memo(TheHeader)
