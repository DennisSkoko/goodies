import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useToggledState from '../../hooks/useToggledState'
import Text from '../Text'
import styles from './InputText.module.scss'

function InputText ({ label, id, value, onChange, error, ...props }) {
  const [currentError, setCurrentError] = useState(error)
  const [isFocused, toggleIsFocused] = useToggledState(false)
  const [isDirty, toggleIsDirty] = useToggledState(false)

  if (error && currentError !== error) {
    setCurrentError(error)
  }

  const handleChange = (event) => {
    onChange(event)
    if (!isDirty) toggleIsDirty()
  }

  const handleBlur = () => {
    toggleIsFocused()
    if (!isDirty) toggleIsDirty()
  }

  const handleTransitionEnd = () => {
    if (!error) setCurrentError(error)
  }

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
          onFocus={toggleIsFocused}
          onBlur={handleBlur}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </label>

      <Text
        type='small'
        onTransitionEnd={handleTransitionEnd}
        className={classNames(styles.error, {
          [styles.active]: isDirty && !!error
        })}
      >
        {(isDirty && currentError) || '&nbsp;'}
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
