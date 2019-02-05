import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useToggledState from '../../hooks/useToggledState'
import Text from '../Text'
import styles from './InputText.module.scss'

function InputText ({ label, id, value, error, ...props }) {
  const [isFocused, toggleFocused] = useToggledState(false)

  return (
    <div className={styles.wrapper}>
      <label
        htmlFor={id}
        className={classNames(styles.label, {
          [styles.focused]: isFocused || value !== ''
        })}
      >
        <Text className={styles.labelText}>{label}</Text>

        <input
          className={styles.input}
          id={id}
          onFocus={toggleFocused}
          onBlur={toggleFocused}
          value={value}
          {...props}
        />
      </label>

      <Text
        type='small'
        className={classNames(styles.error, {
          [styles.active]: !!error
        })}
      >
        {error || '&nbsp;'}
      </Text>
    </div>
  )
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}

InputText.defaultProps = {
  error: null
}

export default InputText
