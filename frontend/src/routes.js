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
    component: Abos,
  },
  {
    path: '/veranstaltungen',
    name: 'Veranstaltungen',
    component: Veranstaltungen,
  },
  {
    path: '/kuenstler',
    name: 'Künstler',
    component: Kuenstler,
  },
]
