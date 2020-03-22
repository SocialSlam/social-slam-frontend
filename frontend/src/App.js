import React from 'react';
import { Route, Switch  }from 'react-router-dom';
import Home from './pages/Home';

import './App.scss';
import { ApolloProvider } from 'react-apollo';
import { createClient } from  './lib/apollo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faBell)

const client = createClient()

const App = () => (
  <ApolloProvider client={client}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </ApolloProvider>
);

export default App;
