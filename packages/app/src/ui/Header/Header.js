import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../res/logo.svg'
import Container from '../Container'
import styles from './Header.module.scss'

function Header ({ children }) {
  return (
    <header className={styles.header}>
      <Container className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt='' />

        <nav>
          <ul className={styles.navigation}>
            {children}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

Header.propTypes = {
  children: PropTypes.node
}

Header.defaultProps = {
  children: null
}

export default Header
