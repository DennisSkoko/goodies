const ADD_TOAST = 'add-toast'
const REMOVE_TOAST = 'remove-toast'
const PREPARE_REMOVE_TOAST = 'prepare-remove-toast'

function reducer (state, action) {
  switch (action.type) {
    case ADD_TOAST:
      return {
        ...state,
        toast: action.toast,
        timeouts: action.timeouts
      }

    case REMOVE_TOAST:
      if (state.timeouts) {
        state.timeouts.forEach(timeout => {
          clearTimeout(timeout)
        })
      }

      return {
        ...state,
        toast: null
      }

    case PREPARE_REMOVE_TOAST:
      if (!state.toast) return state

      return {
        ...state,
        toast: {
          ...state.toast,
          isDisappearing: true
        }
      }

    default:
      return state
  }
}

export default reducer
export { ADD_TOAST, REMOVE_TOAST, PREPARE_REMOVE_TOAST }
