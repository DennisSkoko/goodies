const ADD_TOAST = 'add-toast'
const REMOVE_TOAST = 'remove-toast'
const PREPARE_REMOVE_TOAST = 'prepare-remove-toast'

function reducer (state, action) {
  switch (action.type) {
    case ADD_TOAST:
      if (state.timeout) clearTimeout(state.timeout)

      return {
        ...state,
        toast: action.toast,
        timeout: action.timeout
      }

    case REMOVE_TOAST:
      if (state.timeout) clearTimeout(state.timeout)

      return {
        ...state,
        toast: null,
        timeout: null
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
