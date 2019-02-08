import React, { useState } from 'react'
import classNames from 'classnames'
import Text from '../Text'
import styles from './InputErrorText.module.scss'

function InputErrorText ({ error: stagedError, ...props }) {
  const [currentError, setCurrentError] = useState(stagedError)

  if (stagedError && currentError !== stagedError) {
    setCurrentError(stagedError)
  }

  const handleTransitionEnd = (event) => {
    if (event.propertyName === 'transform') setCurrentError(null)
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
