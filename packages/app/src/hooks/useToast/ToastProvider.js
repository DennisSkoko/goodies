import React, { useReducer } from 'react'
import reducer from './reducer'
import ToastContext from './ToastContext'

function ToastProvider (props) {
  const [state, dispatch] = useReducer(reducer, { toast: null, timeout: null })
  return <ToastContext.Provider {...props} value={{ state, dispatch }} />
}

export default ToastProvider
