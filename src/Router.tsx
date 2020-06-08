import * as React from 'react'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing/Landing'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Debug } from './pages/Debug'
import { Error404 } from './pages/Error404'
import { Stream } from './pages/Stream'
// import {View} from './pages/View'


export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home,
  },
  {
    path: '/debug',
    name: 'DEBUG',
    exact: true,
    component: Debug,
  },
  {
    path: '/landing',
    name: 'Landing Page',
    exact: true,
    component: Landing,
  },
  {
    path: '/stream/:streamId',
    name: 'Stream',
    exact: true,
    component: Stream,
  },
  // {
  //   path: '/view',
  //   name: 'View',
  //   exact: undefined,
  //   component: View,
  // },
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
