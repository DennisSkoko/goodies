import React from 'react'
import Heading from '../Heading'
import Text from '../Text'
import styles from './HeroHeader.module.scss'

function HeroImage () {
  return (
    <header className={styles.image}>
      <div className={styles.wrapper}>
        <Heading type='display1'>Goodies</Heading>
        <Text type='lead'>
          This is a place for people who likes to make good food. Join a
          community where people can share their recipes, improve and evolve
          together.
        </Text>
      </div>
    </header>
  )
}

export default HeroImage
