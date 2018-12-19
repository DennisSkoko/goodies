import React, { Component } from 'react'
import ApiProvider from './api/ApiProvider'
import { AuthProvider } from './hooks/useAuth'
import { ToastsProvider } from './hooks/useToasts'
import TheHeader from './components/TheHeader'
import Router from './routing/Router'
import RouterOutlet from './routing/RouterOutlet'
import GlobalStyle from './style/GlobalStyle'
import ThemeProvider from './style/ThemeProvider'

class App extends Component {
  render () {
    return (
      <ApiProvider>
        <ThemeProvider>
          <AuthProvider>
            <ToastsProvider>
              <Router>
                <>
                  <GlobalStyle />
                  <TheHeader />
                  <RouterOutlet />
                </>
              </Router>
            </ToastsProvider>
          </AuthProvider>
        </ThemeProvider>
      </ApiProvider>
    )
  }
}

export default App
