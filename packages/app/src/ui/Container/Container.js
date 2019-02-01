import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Container.module.scss'

function Container ({ className, as: As, ...props }) {
  return (
    <As className={classNames(styles.wrapper, className)} {...props} />
  )
}

Container.propTypes = {
  className: PropTypes.string,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

Container.defaultProps = {
  className: null,
  as: 'div'
}

export default Container
