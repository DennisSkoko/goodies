import React from 'react'
import TheHeader from './components/TheHeader'
import { AuthProvider } from './hooks/useAuth'
import RouterOutlet from './routing/RouterOutlet'
import RouterProvider from './routing/RouterProvider'
import './style'

function App () {
  return (
    <RouterProvider>
      <AuthProvider>
        <>
          <RouterOutlet />
          <TheHeader />
        </>
      </AuthProvider>
    </RouterProvider>
  )
}

export default App
