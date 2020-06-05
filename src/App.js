import React from 'react';
import { Route, Switch  }from 'react-router-dom';

import './App.scss';
import { ApolloProvider } from 'react-apollo';
import { createClient } from  './lib/apollo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faBell)

import rotues from './routes'

const client = createClient()

const App = () => (
  <ApolloProvider client={client}>
    <Switch>
      { rotues.length > 0 && rotues.map(({ path, component, exact, ...rest}, idx) => (
        <Route key={idx} path={path} exact component={component} {...rest} />
      ))}
    </Switch>
  </ApolloProvider>
);

export default App;
