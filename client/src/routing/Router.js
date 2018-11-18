import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter } from 'react-router-dom'

function Router ({ children }) {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
}

Router.propTypes = {
  children: PropTypes.node.isRequired
}

export default Router
