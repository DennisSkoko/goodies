function rule (field, value) {
  return {
    message: `This field must match the ${field} field`,
    satisfies (input) {
      return input === value
    }
  }
}

export default rule
