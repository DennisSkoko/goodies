import { useContext } from 'react'
import { ADD_TOAST, REMOVE_TOAST, PREPARE_REMOVE_TOAST } from './reducer'
import ToastContext from './ToastContext'

const TOAST_LIFETIME_MAX = 8000

const Type = {
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Info: 'info'
}

function useToast () {
  const { state, dispatch } = useContext(ToastContext)

  return {
    toast: state.toast,

    addToast (toast) {
      const timeout = setTimeout(() => {
        dispatch({ type: PREPARE_REMOVE_TOAST })
      }, TOAST_LIFETIME_MAX)

      dispatch({ type: ADD_TOAST, toast, timeout })
    },

    removeToast () {
      dispatch({ type: REMOVE_TOAST })
    },

    prepareRemoveToast () {
      dispatch({ type: PREPARE_REMOVE_TOAST })
    }
  }
}

export default useToast
export { Type }
