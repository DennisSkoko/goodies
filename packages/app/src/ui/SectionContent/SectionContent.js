import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Container from '../Container'
import styles from './SectionContent.module.scss'

function SectionContent ({ children, image, header, className, reversed }) {
  return (
    <Container>
      <section className={classNames(styles.wrapper, className)}>
        {header}
        <div className={classNames(styles.content, {
          [styles.reversed]: reversed
        })}>
          <div className={styles.image}>{image}</div>
          <div className={styles.text}>{children}</div>
        </div>
      </section>
    </Container>
  )
}

SectionContent.propTypes = {
  children: PropTypes.node,
  image: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string,
  reversed: PropTypes.bool
}

SectionContent.defaultProps = {
  children: null,
  image: null,
  header: null,
  className: null,
  reversed: false
}

export default SectionContent
