import React, { Component } from 'react'
import ThemeProvider from './style/ThemeProvider'

class App extends Component {
  render () {
    return (
      <ThemeProvider>
        <header>
          <h1>Hello</h1>
        </header>
      </ThemeProvider>
    )
  }
}

export default App
