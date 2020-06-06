import { Home } from './pages/Home/Home'
import { Landing } from './pages/Landing/Landing'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/landing',
    name: 'Landing Page',
    component: Landing,
  },
]

export const Router: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, component, ...rest }, i) => (
          <Route key={i} path={path} exact component={component} {...rest} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
