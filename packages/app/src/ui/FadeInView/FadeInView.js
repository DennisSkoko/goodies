import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import useInViewDetector from '../../hooks/useInViewDetector'
import styles from './FadeInView.module.scss'

function FadeInView ({ className, ...props }) {
  const ref = React.createRef()
  const inView = useInViewDetector(ref)

  return (
    <div
      ref={ref}
      className={classNames(styles.wrapper, className, {
        [styles.show]: inView
      })}
      {...props}
    />
  )
}

FadeInView.propTypes = {
  className: PropTypes.string
}

FadeInView.defaultProps = {
  className: null
}

export default React.memo(FadeInView)
