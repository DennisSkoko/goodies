import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Link.module.scss'

function Link ({ href, className, variant, spacing, ...props }) {
  const link = (
    <RouterLink
      className={classNames(styles.link, className, {
        [styles.spacing]: spacing
      })}
      to={href}
      {...props}
    />
  )

  if (variant === 'block-centered') {
    return (
      <div className={styles[variant]}>{link}</div>
    )
  }

  return link
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['inline', 'block-centered']),
  spacing: PropTypes.bool
}

Link.defaultProps = {
  className: null,
  variant: 'inline',
  spacing: false
}

export default Link
