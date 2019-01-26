import { useState } from 'react'

function useInputState (initial) {
  const [value, setValue] = useState(initial)

  return [
    value,
    (event) => {
      setValue(event.target.value)
    }
  ]
}

export default useInputState
