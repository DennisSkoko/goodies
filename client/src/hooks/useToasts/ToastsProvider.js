import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import Toasts from '../../ui/Toasts'
import reducer from './reducer'
import ToastsContext from './ToastsContext'

function ToastsProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, { toasts: [] })

  return (
    <ToastsContext.Provider value={{ state, dispatch }}>
      <Toasts />
      {children}
    </ToastsContext.Provider>
  )
}

ToastsProvider.propTypes = {
  children: PropTypes.node
}

ToastsProvider.defaultProps = {
  children: null
}

export default ToastsProvider
