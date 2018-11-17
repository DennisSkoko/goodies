import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as Provider } from 'styled-components'
import theme from './theme'

function ThemeProvider ({ children }) {
  return (
    <Provider theme={theme}>
      {children}
    </Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}

export default React.memo(ThemeProvider)
