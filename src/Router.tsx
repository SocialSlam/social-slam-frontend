import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Debug } from './pages/Debug'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing/Landing'
import { Register } from './pages/Register'
import { Stream } from './pages/Stream'
import { ROUTE_HOME, ROUTE_REGISTER } from './Constants'

export const routes = [
  {
    path: ROUTE_HOME,
    name: 'Home',
    exact: true,
    component: Home,
  },
  {
    path: ROUTE_REGISTER,
    name: 'Register',
    exact: true,
    component: Register,
  },

  //   Temp
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
]

export const Router: React.FC = (props) => {
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
