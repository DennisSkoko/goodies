import Welcome from '../pages/Welcome'
import CreateAccount from '../pages/CreateAccount'
import SignIn from '../pages/SignIn'

export default [
  {
    key: 'Welcome',
    path: '/',
    component: Welcome,
    exact: true
  },

  {
    key: 'CreateAccount',
    path: '/create-account',
    component: CreateAccount
  },

  {
    key: 'SignIn',
    path: '/sign-in',
    component: SignIn
  }
]
