import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Text.module.scss'

function Text ({ as: As, type, color, centered, className, ...props }) {
  return (
    <As
      className={classNames(className, styles[type], styles[color], {
        [styles.centered]: centered
      })}
      {...props}
    />
  )
}

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'small', 'span']),
  type: PropTypes.oneOf(['small', 'body', 'lead']),
  color: PropTypes.oneOf(['primary', 'white']),
  centered: PropTypes.bool,
  className: PropTypes.string
}

Text.defaultProps = {
  as: 'p',
  type: 'body',
  color: 'primary',
  centered: false,
  className: null
}

export default Text
