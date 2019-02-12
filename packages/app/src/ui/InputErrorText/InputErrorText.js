import React, { useState } from 'react'
import classNames from 'classnames'
import Text from '../Text'
import styles from './InputErrorText.module.scss'

function InputErrorText ({ error: stagedError, ...props }) {
  // Because of a bug in React, this state needs to be in an object.
  // More info: https://github.com/facebook/react/issues/14812
  const [{ currentError }, setCurrentError] = useState({
    currentError: stagedError
  })

  if (stagedError && currentError !== stagedError) {
    setCurrentError({
      currentError: stagedError
    })
  }

  const handleTransitionEnd = (event) => {
    // Dirty hack to make sure this event handler is only called once
    if (event.propertyName === 'transform') {
      setCurrentError({ currentError: null })
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

export default InputErrorText
