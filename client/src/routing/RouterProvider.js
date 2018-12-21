import React from 'react'
import PropTypes from 'prop-types'
import { HashRouter } from 'react-router-dom'

function RouterProvider ({ children }) {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  )
}

RouterProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default RouterProvider
