import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Buttons.module.scss'

function Button ({ wide, color, disabled, onClick, ...props }) {
  return (
    <button
      className={classNames([styles.button, styles.primary], {
        [styles.wide]: wide,
        [styles.disabled]: disabled
      })}
      onClick={disabled ? null : onClick}
      {...props}
    />
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary']),
  onClick: PropTypes.func,
  wide: PropTypes.bool,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  color: 'primary',
  onClick: null,
  wide: false,
  disabled: false
}

export default Button
