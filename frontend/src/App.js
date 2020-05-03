import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './pages/landing_page/Landing'
import Error404 from './pages/Error404'

const App = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route component={Error404} />
  </Switch>
)

export default App
