import isEmpty from 'validator/lib/isEmpty'

const rule = {
  message: 'This field is required',
  satisfies (value) {
    return !isEmpty(value);
  }
}

export default rule
