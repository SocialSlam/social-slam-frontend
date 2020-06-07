import { Home } from './pages/Home'
import { Landing } from './pages/Landing/Landing'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import * as React from 'react'
import { Debug } from './pages/Debug'
import { Error404 } from './pages/Error404'
import {Stream} from './pages/Stream'
import {View} from './pages/View'


export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: undefined,
    component: Home,
  },
  {
    path: '/debug',
    name: 'DEBUG',
    exact: undefined,
    component: Debug,
  },
  {
    path: '/landing',
    name: 'Landing Page',
    exact: undefined,
    component: Landing,
  },
  {
    path: '/stream',
    name: 'Stream',
    exact: undefined,
    component: Stream,
  },
  {
    path: '/view',
    name: 'View',
    exact: undefined,
    component: View,
  },
]

export const Router: React.FC = (props) => {
  // @ts-ignore
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((props, i) => (
          <Route key={i} {...props} />
        ))}
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}
