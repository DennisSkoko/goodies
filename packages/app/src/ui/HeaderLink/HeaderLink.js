import React from 'react'
import classNames from 'classnames'
import { Link } from '@reach/router'
import styles from './HeaderLink.module.scss'

function HeaderLink (props) {
  return (
    <li>
      <Link
        getProps={({ isCurrent }) => ({
          className: classNames(styles.link, {
            [styles.active]: isCurrent
          })
        })}
        {...props}
      />
    </li>
  )
}

export default HeaderLink
