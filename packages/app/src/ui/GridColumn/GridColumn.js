import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './GridColumn.module.scss'

function GridColumn ({ size, className, ...props }) {
  return (
    <div
      className={classNames(className, styles[`size-${size}`])}
      {...props}
    />
  )
}

GridColumn.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  className: PropTypes.string
}

GridColumn.defaultProps = {
  size: 1,
  className: null
}

export default GridColumn
