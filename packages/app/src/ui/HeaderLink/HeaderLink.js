import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './HeaderLink.module.scss'

function HeaderLink (props) {
  return (
    <li>
      <NavLink
        className={styles.link}
        activeClassName={styles.active}
        {...props}
      />
    </li>
  )
}

export default HeaderLink
