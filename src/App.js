import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Product from './pages/Product';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route
          path='/product/:id'
          exact
          component={props => <Product {...props} />}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
