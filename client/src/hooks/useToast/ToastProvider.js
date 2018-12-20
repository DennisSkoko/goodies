import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import reducer from './reducer'
import ToastsContext from './ToastContext'

function ToastsProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, { toast: null })

  return (
    <ToastsContext.Provider value={{ state, dispatch }}>
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
