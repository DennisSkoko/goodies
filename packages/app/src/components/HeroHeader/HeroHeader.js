import React from 'react'
import useImageLoader from '../../hooks/useImageLoader'
import Heading from '../../ui/Heading'
import Text from '../../ui/Text'
import styles from './HeroHeader.module.scss'

function HeroImage () {
  const image = useImageLoader({
    optimized: '/img/hero-image-blurry.jpg',
    original: '/img/hero-image.jpg'
  })

  return (
    <header
      className={styles.image}
      style={{ backgroundImage: `url(${image})` }}
    >
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
