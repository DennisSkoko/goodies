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
        <HeaderNavLink to='/recipe/browse'>Browse</HeaderNavLink>
      </HeaderNav>
    </Header>
  )
}

export default TheHeader
