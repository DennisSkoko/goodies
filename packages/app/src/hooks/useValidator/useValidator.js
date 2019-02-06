import { useMemo } from 'react'

function useValidator (input, rules) {
  const rule = useMemo(
    () => rules.find(rule => !rule.satisfies(input)),
    [input]
  )

  return rule && rule.message
}

export default useValidator
