import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.module.scss'

function Text ({ as: As, type, ...props }) {
  return (
    <As className={styles[type]} {...props} />
  )
}

Text.propTypes = {
  as: PropTypes.oneOf(['p', 'small', 'span']),
  type: PropTypes.oneOf(['small', 'body', 'lead'])
}

Text.defaultProps = {
  as: 'p',
  type: 'body'
}

export default Text
