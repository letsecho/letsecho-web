import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { GeneralRouter } from './GeneralRouter';
import { Principal } from '../components/Principal';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/index" component={ Principal } />
          <Route path="/" component={ GeneralRouter } />
        </Switch>
      </div>
    </Router>
  )
}
