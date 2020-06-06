import {Home} from './pages/Home'
import {Landing} from './pages/landing_page/Landing'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import * as React from 'react'

export const Router: React.FC = (props) => {

  const routes = [
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

  return (<BrowserRouter>
    <Switch>
      {routes.map(({ path, component, ...rest}, i) => <Route key={i} path={path} exact component={component} {...rest} />)}
    </Switch>
  </BrowserRouter>)
}
