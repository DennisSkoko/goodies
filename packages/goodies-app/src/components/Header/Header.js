import React from 'react'
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
                <a className={styles.navLink} href={to}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
