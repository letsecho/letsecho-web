import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { GeneralRouter } from './GeneralRouter';
import { Main } from '../components/Main';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route component={ GeneralRouter } />
        </Switch>
      </div>
    </Router>
  )
}
