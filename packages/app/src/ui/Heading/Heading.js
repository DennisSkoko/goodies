import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Heading.module.scss'

const types = {
  displays: ['display1', 'display2', 'display3', 'display4'],
  headers: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
}

function Heading ({ as: As, type, color, centered, className, ...props }) {
  if (As === null) As = types.displays.includes(type) ? 'h1' : type

  return (
    <As
      className={classNames(className, styles[type], styles[color], {
        [styles.centered]: centered
      })}
      {...props}
    />
  )
}

Heading.propTypes = {
  as: PropTypes.oneOf(types.headers),
  type: PropTypes.oneOf([...types.displays, ...types.headers]),
  color: PropTypes.oneOf(['primary', 'white']),
  centered: PropTypes.bool,
  className: PropTypes.string
}

Heading.defaultProps = {
  as: null,
  type: 'h1',
  color: 'primary',
  centered: false,
  className: null
}

export default Heading
