import React from 'react';
import { Route, Switch  }from 'react-router-dom';

import rotues from './routes'

const App = () => (
  <Switch>
    { rotues.length > 0 && rotues.map(({ path, component, exact, ...rest}, idx) => (
      <Route key={idx} path={path} exact component={component} {...rest} />
    ))}
  </Switch>
);

export default App;
