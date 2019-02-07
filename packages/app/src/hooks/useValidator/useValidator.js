import { useMemo } from 'react'

function useValidator (input, rules, dependencies) {
  const rule = useMemo(
    () => rules.find(rule => !rule.satisfies(input)),
    [input].concat(dependencies)
  )

  return rule && rule.message
}

export default useValidator
