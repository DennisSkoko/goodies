import Welcome from '../pages/Welcome'
import RecipeBrowse from '../pages/RecipeBrowse'
import NotFound from '../pages/NotFound'

export default [
  { path: '/', exact: true, component: Welcome },
  { path: '/recipe/browse', component: RecipeBrowse },
  { component: NotFound }
]
