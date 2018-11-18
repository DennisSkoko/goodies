import Welcome from '../pages/Welcome'
import NotFound from '../pages/NotFound'

export default [
  { path: '/', exact: true, component: Welcome },
  { component: NotFound }
]
