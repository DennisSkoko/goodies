import isLength from 'validator/lib/isLength'

function rule (options) {
  const messages = []

  if (options.min !== undefined) messages.push(`minimum of ${options.min}`)
  if (options.max !== undefined) messages.push(`maximum of ${options.max}`)

  return {
    message: `Must be ${messages.join(' and ')} characters`,
    satisfies (value) {
      return isLength(value, options)
    }
  }
}

export default rule
