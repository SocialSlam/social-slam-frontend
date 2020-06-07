import { Home } from './pages/Home'
import { Landing } from './pages/Landing/Landing'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import * as React from 'react'
import { Debug } from './pages/Debug'
import { Error404 } from './pages/Error404'

export const routes = [
  {
    path: '/',
    name: 'Home',
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
    component: Landing,
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
