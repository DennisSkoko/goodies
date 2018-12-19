const ADD_TOASTS = 'add-toasts'
const REMOVE_TOASTS = 'remove-toasts'
const PREPARE_REMOVE_TOASTS = 'prepare-remove-toasts'

function reducer (state, action) {
  switch (action.type) {
    case ADD_TOASTS:
      return {
        ...state,
        toasts: [
          ...state.toasts,
          ...action.toasts
        ]
      }

    case REMOVE_TOASTS:
      return {
        ...state,
        toasts: state.toasts.filter(({ key }) => !action.keys.includes(key))
      }

    case PREPARE_REMOVE_TOASTS:
      return {
        ...state,
        toasts: state.toasts.map(toast => {
          if (action.keys.includes(toast.key)) {
            return {
              ...toast,
              isDisappearing: true
            }
          }

          return toast
        })
      }

    default:
      return state
  }
}

export default reducer
export { ADD_TOASTS, REMOVE_TOASTS, PREPARE_REMOVE_TOASTS }
