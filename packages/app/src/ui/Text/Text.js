import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Text.module.scss'

function Text ({ as: As, type, centered, className, ...props }) {
  return (
    <As
      className={classNames(styles[type], className, {
        [styles.centered]: centered
      })}
      {...props}
    />
  )
}

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'small', 'span']),
  type: PropTypes.oneOf(['small', 'body', 'lead']),
  centered: PropTypes.bool,
  className: PropTypes.string
}

Text.defaultProps = {
  as: 'p',
  type: 'body',
  centered: false,
  className: null
}

export default Text
