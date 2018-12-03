import React, { Component } from 'react'
import TheHeader from './components/TheHeader'
import Router from './routing/Router'
import RouterOutlet from './routing/RouterOutlet'
import GlobalStyle from './style/GlobalStyle'
import ThemeProvider from './style/ThemeProvider'

class App extends Component {
  render () {
    return (
      <ThemeProvider>
        <Router>
          <>
            <GlobalStyle />
            <TheHeader />
            <RouterOutlet />
          </>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
