import { useState } from 'react'

function useToggledState (initial) {
  const [ifToggled, setIfToggled] = useState(initial)
  return [ifToggled, () => { setIfToggled(!ifToggled) }]
}

export default useToggledState
