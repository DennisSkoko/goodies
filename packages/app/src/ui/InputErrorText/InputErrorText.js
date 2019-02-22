import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Text from '../Text'
import styles from './InputErrorText.module.scss'

function InputErrorText ({ error: stagedError, ...props }) {
  const [currentError, setCurrentError] = useState(stagedError)

  if (stagedError && currentError !== stagedError) {
    setCurrentError(stagedError)
  }

  const handleTransitionEnd = (event) => {
    // Dirty hack to make sure this event handler is only called once
    if (event.propertyName === 'transform') {
      setCurrentError(null)
    }
  }

  return (
    <Text
      type='small'
      onTransitionEnd={!stagedError ? handleTransitionEnd : null}
      className={classNames(styles.error, {
        [styles.active]: !!stagedError
      })}
      {...props}
    >
      {currentError || '&nbsp;'}
    </Text>
  )
}

InputErrorText.propTypes = {
  error: PropTypes.string
}

InputErrorText.defaultProps = {
  error: null
}

export default InputErrorText
