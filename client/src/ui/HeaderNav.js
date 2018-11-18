import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Nav = styled.nav`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
  }
`

function HeaderNav ({ children }) {
  return (
    <Nav>
      <ul>
        {children.map((child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    </Nav>
  )
}

HeaderNav.propTypes = {
  children: PropTypes
    .arrayOf(
      PropTypes.node.isRequired
    )
    .isRequired
}

export default HeaderNav
