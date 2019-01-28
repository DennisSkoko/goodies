import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useToggledState from '../../hooks/useToggledState'
import Text from '../Text'
import styles from './InputText.module.scss'

function InputText ({ label, id, value, ...props }) {
  const [isFocused, toggleFocused] = useToggledState(false)

  return (
    <label
      htmlFor={id}
      className={classNames(styles.wrapper, {
        [styles.focused]: isFocused || value !== ''
      })}
    >
      <Text className={styles.label}>
        {label}
      </Text>

      <input
        className={styles.input}
        id={id}
        onFocus={toggleFocused}
        onBlur={toggleFocused}
        value={value}
        {...props}
      />
    </label>
  )
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputText
