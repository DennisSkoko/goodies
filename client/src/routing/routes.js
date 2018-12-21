import Welcome from '../pages/Welcome'
import RecipeBrowse from '../pages/RecipeBrowse'
import SignIn from '../pages/SignIn'
import NotFound from '../pages/NotFound'

export default [
  { key: 'Welcome', path: '/', exact: true, component: Welcome },
  { key: 'RecipeBrowse', path: '/recipe/browse', component: RecipeBrowse },
  { key: 'SignIn', path: '/sign-in', component: SignIn },
  { key: 'NotFound', component: NotFound }
]
