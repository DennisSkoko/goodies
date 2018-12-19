import { useContext } from 'react'
import { stripUnit } from 'polished'
import theme from '../../style/theme'
import { ADD_TOASTS, REMOVE_TOASTS, PREPARE_REMOVE_TOASTS } from './reducer'
import ToastsContext from './ToastsContext'

const TOASTS_LIFETIME_MAX = 8000

function useToasts () {
  const { state, dispatch } = useContext(ToastsContext)

  return {
    toasts: state.toasts,

    addToasts (toasts) {
      dispatch({ type: ADD_TOASTS, toasts })

      setTimeout(() => {
        dispatch({
          type: PREPARE_REMOVE_TOASTS,
          keys: toasts.map(({ key }) => key)
        })
      }, TOASTS_LIFETIME_MAX)

      setTimeout(() => {
        dispatch({
          type: REMOVE_TOASTS,
          keys: toasts.map(({ key }) => key)
        })
      }, TOASTS_LIFETIME_MAX + stripUnit(theme.transition.normal))
    }
  }
}

export default useToasts
