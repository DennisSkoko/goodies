import React from 'react'
import TheHeader from './components/TheHeader'
import { AuthProvider } from './hooks/useAuth'
import { ToastProvider } from './hooks/useToast'
import RouterOutlet from './routing/RouterOutlet'
import RouterProvider from './routing/RouterProvider'
import Toast from './ui/Toast'
import './style'

function App () {
  return (
    <RouterProvider>
      <AuthProvider>
        <ToastProvider>
          <>
            <TheHeader />
            <Toast />
            <RouterOutlet />
          </>
        </ToastProvider>
      </AuthProvider>
    </RouterProvider>
  )
}

export default App
