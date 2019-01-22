import React from 'react'
import Header from './components/Header'
import HeroHeader from './components/HeroHeader'
import './style'

const links = [
  { text: 'Home', to: '/' },
  { text: 'About', to: '/about' },
  { text: 'Contact', to: '/contact' }
]

function App () {
  return (
    <>
      <Header title='Goodies' links={links} />
      <HeroHeader />
    </>
  )
}

export default App
