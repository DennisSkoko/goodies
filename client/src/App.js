import React, { Component } from 'react'
import ApiProvider from './api/ApiProvider'
import { AuthProvider } from './hooks/useAuth'
import { ToastProvider } from './hooks/useToast'
import TheHeader from './components/TheHeader'
import Router from './routing/Router'
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
              <Router>
                <>
                  <GlobalStyle />
                  <TheHeader />
                  <Toasts />
                  <RouterOutlet />
                </>
              </Router>
            </ToastProvider>
          </AuthProvider>
        </ThemeProvider>
      </ApiProvider>
    )
  }
}

export default App
