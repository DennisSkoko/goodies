import Welcome from '../pages/Welcome'
import CreateAccount from '../pages/CreateAccount'
import NotFound from '../pages/NotFound/NotFound'
import SignIn from '../pages/SignIn'

export default [
  {
    key: 'Welcome',
    path: '/',
    component: Welcome,
    exact: true,
    auth: false
  },

  {
    key: 'CreateAccount',
    path: '/create-account',
    component: CreateAccount,
    auth: false
  },

  {
    key: 'SignIn',
    path: '/sign-in',
    component: SignIn,
    auth: false
  },

  {
    key: 'NotFound',
    path: '*',
    component: NotFound
  }
]
