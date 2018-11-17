import React, { Component } from 'react'
import GlobalStyles from './style/GlobalStyles'
import ThemeProvider from './style/ThemeProvider'
import TheHeader from './components/TheHeader'

class App extends Component {
  render () {
    return (
      <ThemeProvider>
        <>
          <GlobalStyles />
          <TheHeader />
        </>
      </ThemeProvider>
    )
  }
}

export default App
