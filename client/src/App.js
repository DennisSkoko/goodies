import React, { Component } from 'react'
import TheHeader from './components/TheHeader'
import Router from './routing/Router'
import RouterOutlet from './routing/RouterOutlet'
import GlobalStyles from './style/GlobalStyles'
import ThemeProvider from './style/ThemeProvider'

class App extends Component {
  render () {
    return (
      <ThemeProvider>
        <Router>
          <>
            <GlobalStyles />
            <TheHeader />
            <RouterOutlet />
          </>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
