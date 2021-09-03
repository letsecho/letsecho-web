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
          <Route exact path="/index" component={ Main } />
          <Route path="/" component={ GeneralRouter } />
        </Switch>
      </div>
    </Router>
  )
}
