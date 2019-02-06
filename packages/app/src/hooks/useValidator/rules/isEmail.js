import isEmail from 'validator/lib/isEmail'

const rule = {
  message: 'Must provide a valid email',
  satisfies: isEmail
}

export default rule
