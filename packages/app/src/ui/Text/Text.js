import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Text.module.scss'

function Text ({ as: As, type, centered, ...props }) {
  return (
    <As
      className={classNames(styles[type], {
        [styles.centered]: centered
      })}
      {...props}
    />
  )
}

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'small', 'span']),
  type: PropTypes.oneOf(['small', 'body', 'lead']),
  centered: PropTypes.bool
}

Text.defaultProps = {
  as: 'p',
  type: 'body',
  centered: false
}

export default Text
