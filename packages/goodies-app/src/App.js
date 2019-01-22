import React from 'react'
import TheHeader from './components/TheHeader'
import RouterOutlet from './routing/RouterOutlet'
import RouterProvider from './routing/RouterProvider'
import './style'

function App () {
  return (
    <RouterProvider>
      <>
        <RouterOutlet />
        <TheHeader />
      </>
    </RouterProvider>
  )
}

export default App
