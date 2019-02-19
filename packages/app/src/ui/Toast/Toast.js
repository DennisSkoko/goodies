import React from 'react'
import classNames from 'classnames'
import useToast from '../../hooks/useToast'
import { ReactComponent as CloseIcon } from '../../res/icons/close.svg'
import Heading from '../Heading'
import Text from '../Text'
import styles from './Toast.module.scss'

function Toasts () {
  const { toast, removeToast, prepareRemoveToast } = useToast()

  if (!toast) return null

  const handleAnimationEnd = () => {
    if (toast.isDisappearing) removeToast()
  }

  const handleClick = () => {
    prepareRemoveToast()
  }

  return (
    <div className={styles.wrapper}>
      <div
        onAnimationEnd={handleAnimationEnd}
        className={classNames(styles.toast, styles[toast.type], {
          [styles.disappearing]: toast.isDisappearing
        })}
      >
        <button onClick={handleClick} className={styles.close}>
          <CloseIcon className={styles.icon} />
        </button>
        {toast.title && (
          <Heading type='h6' color='white'>{toast.title}</Heading>
        )}
        <Text color='white'>{toast.content}</Text>
      </div>
    </div>
  )
}

export default Toasts
