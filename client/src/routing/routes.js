import Welcome from '../pages/Welcome'
import RecipeBrowse from '../pages/RecipeBrowse'
import SignIn from '../pages/SignIn'
import NotFound from '../pages/NotFound'

export default [
  { path: '/', exact: true, component: Welcome },
  { path: '/recipe/browse', component: RecipeBrowse },
  { path: '/sign-in', component: SignIn },
  { component: NotFound }
]
