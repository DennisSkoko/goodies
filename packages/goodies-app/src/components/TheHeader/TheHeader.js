import React from 'react'
import Header from '../../ui/Header'

const links = [
  { text: 'Home', to: '/', exact: true },
  { text: 'About', to: '/about' },
  { text: 'Contact', to: '/contact' }
]

function TheHeader () {
  return <Header title='Goodies' links={links} />
}

export default TheHeader
