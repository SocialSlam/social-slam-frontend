import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { hydrate } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import configureStore from './store'
import { createClient } from './lib/apollo'

const client = createClient()
const store = configureStore()

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
