import * as React from 'react'
import { Router } from './Router'
import { Provider } from 'react-redux'
import { store } from './redux/Store'

export const App: React.FC = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
