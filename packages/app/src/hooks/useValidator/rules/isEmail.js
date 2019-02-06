import isEmail from 'validator/lib/isEmail'

const rule = {
  satisfies: isEmail,
  message: 'Must provide a valid email'
}

export default rule
