import Home from './pages/Home'
import Abos from './pages/Abos'
import Veranstaltungen from './pages/Veranstaltungen'
import Kuenstler from './pages/Kuenstler'
import Landing from './pages/landing_page/Landing'
import Debug from './pages/Debug'
import Stream from './pages/Stream'
import View from './pages/View'

export default [
  {
    path: '/stream',
    name: 'Stream',
    exact: true,
    component: Stream,
  },
  {
    path: '/view',
    name: 'View',
    exact: true,
    component: View,
  },
  {
    path: '/debug',
    name: 'DEBUG',
    exact: true,
    component: Debug,
  },
  {
    path: '/prototype',
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
  {
    path: '/',
    name: 'Landing Page',
    component: Landing,
  },
]
