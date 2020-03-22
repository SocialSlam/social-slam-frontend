import Home from './pages/Home'
import Abos from './pages/Abos'
import Veranstaltungen from './pages/Veranstaltungen'
import Kuenstler from './pages/Kuenstler'

export default [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
  },
  {
    path: '/abos',
    name: 'Abos',
    component: Home,
  },
  {
    path: '/veranstaltungen',
    name: 'Veranstaltungen',
    component: Home,
  },
  {
    path: '/kuenstler',
    name: 'Künstler*innen',
    component: Home,
  },
]
