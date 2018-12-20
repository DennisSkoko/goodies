import { useContext } from 'react'
import { stripUnit } from 'polished'
import theme from '../../style/theme'
import { ADD_TOAST, REMOVE_TOAST, PREPARE_REMOVE_TOAST } from './reducer'
import ToastContext from './ToastContext'

const TOAST_LIFETIME_MAX = 8000
const TOAST_REMOVE_ANIMATION_TIME = stripUnit(theme.transition.normal)

function useToast () {
  const { state, dispatch } = useContext(ToastContext)

  return {
    toast: state.toast,

    addToast (toast) {
      if (state.toast) {
        dispatch({ type: REMOVE_TOAST })
      }

      const timeouts = [
        setTimeout(() => {
          dispatch({ type: PREPARE_REMOVE_TOAST })
        }, TOAST_LIFETIME_MAX),

        setTimeout(() => {
          dispatch({ type: REMOVE_TOAST })
        }, TOAST_LIFETIME_MAX + TOAST_REMOVE_ANIMATION_TIME)
      ]

      dispatch({ type: ADD_TOAST, toast, timeouts })
    }
  }
}

export default useToast
