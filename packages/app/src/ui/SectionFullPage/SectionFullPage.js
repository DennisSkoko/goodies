import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './SectionFullPage.module.scss'

function SectionFullPage ({ children, className, ...props }) {
  return (
    <section className={classNames(styles.wrapper, className)} {...props}>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}

SectionFullPage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

SectionFullPage.defaultProps = {
  children: null,
  className: null
}

export default SectionFullPage
