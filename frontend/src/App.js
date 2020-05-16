import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './pages/landing_page/Landing'
import Error404 from './pages/Error404'
import Stream from './pages/Stream'
import View from './pages/View'

const App = () => (
  <Switch>
    <Route path="/view/:streamId" exact component={View} />
    <Route path="/stream" exact component={Stream} />
    <Route path="/" exact component={Landing} />
    <Route component={Error404} />
  </Switch>
)

export default App
