import React, { Component } from 'react'
import ApiProvider from './api/ApiProvider'
import { AuthProvider } from './hooks/useAuth'
import { ToastProvider } from './hooks/useToast'
import TheHeader from './components/TheHeader'
import RouterProvider from './routing/RouterProvider'
import RouterOutlet from './routing/RouterOutlet'
import GlobalStyle from './style/GlobalStyle'
import ThemeProvider from './style/ThemeProvider'
import Toasts from './ui/Toasts'

class App extends Component {
  render () {
    return (
      <ApiProvider>
        <ThemeProvider>
          <AuthProvider>
            <ToastProvider>
              <RouterProvider>
                <>
                  <GlobalStyle />
                  <TheHeader />
                  <Toasts />
                  <RouterOutlet />
                </>
              </RouterProvider>
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </ApiProvider>
    )
  }
}

export default App
