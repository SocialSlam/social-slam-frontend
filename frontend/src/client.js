import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import { configureStore, history } from './redux/configureStore'

const store = configureStore(window.__PRELOADED_STATE__)

hydrate(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
