import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../res/logo.svg'
import styles from './Header.module.scss'

function Header ({ links }) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={logo} alt='' />

        <nav>
          <ul className={styles.navigation}>
            {links.map(({ text, to }) => (
              <li key={text}>
                <NavLink className={styles.navLink} to={to}>{text}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
