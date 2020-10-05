import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Debug } from './pages/Debug'
import { Error404 } from './pages/Error404'
import { Home } from './pages/Home'
import { Landing } from './pages/Landing/Landing'
import { Register } from './pages/Register'
import { SlamStream } from './pages/SlamStream'
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_REGISTER, ROUTE_RESET_PASSWORD } from './Constants'
import { Login } from './pages/Login'
import { ResetPassword } from './pages/ResetPassword'

export const Router: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTE_HOME} component={Home} />
        <Route exact path={ROUTE_REGISTER} component={Register} />
        <Route exact path={ROUTE_LOGIN} component={Login} />
        <Route exact path={ROUTE_RESET_PASSWORD} component={ResetPassword} />

        {/* Temp */}
        <Route exact path={'/debug'} component={Debug} />
        <Route exact path={'/landing'} component={Landing} />
        <Route exact path={'/stream/:streamId'} component={SlamStream} />

        {/* Fallback */}
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}
