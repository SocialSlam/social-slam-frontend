import React from 'react';
import { Route, Switch  }from 'react-router-dom';
import Home from './Home';
import ArtistList from './components/ArtistList/ArtistList';

import './App.scss';
import { ApolloProvider } from 'react-apollo';
import { createClient } from  './lib/apollo'

const client = createClient()

const App = () => (
  <ApolloProvider client={client}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/artist_list" component={ArtistList} />
    </Switch>
  </ApolloProvider>
);

export default App;
