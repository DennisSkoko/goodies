import React from 'react'
import classNames from 'classnames'
import styles from './Grid.module.scss'

function Grid ({ className, equalHeights, ...props }) {
  return (
    <div
      className={classNames(className, styles.wrapper, {
        [styles.equalHeights]: equalHeights
      })}
      {...props}
    />
  )
}

export default Grid
