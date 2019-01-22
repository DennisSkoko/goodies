import React from 'react'
import Header from './components/Header'
import RouterOutlet from './routing/RouterOutlet'
import RouterProvider from './routing/RouterProvider'
import './style'

const links = [
  { text: 'Home', to: '/', exact: true },
  { text: 'About', to: '/about' },
  { text: 'Contact', to: '/contact' }
]

function App () {
  return (
    <RouterProvider>
      <>
        <Header title='Goodies' links={links} />
        <RouterOutlet />
      </>
    </RouterProvider>
  )
}

export default App
