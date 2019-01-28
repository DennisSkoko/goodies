import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'

export default [
  {
    key: 'Welcome',
    path: '/',
    component: Welcome,
    exact: true
  },

  {
    key: 'SignIn',
    path: '/sign-in',
    component: SignIn
  }
]
