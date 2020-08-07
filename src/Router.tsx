import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Debug } from './pages/Debug'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing/Landing'
import { Register } from './pages/Register'
import { Stream } from './pages/Stream'
import { ROUTE_HOME, ROUTE_REGISTER } from './Constants'

export const Router: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTE_HOME} component={Home} />
        <Route exact path={ROUTE_REGISTER} component={Register} />

        {/* Temp */}
        <Route exact path={'/debug'} component={Debug} />
        <Route exact path={'/landing'} component={Landing} />
        <Route exact path={'/stream/:streamId'} component={Stream} />

        {/* Fallback */}
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}
