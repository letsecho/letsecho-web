import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { GeneralRouter } from './GeneralRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={ GeneralRouter } />
        </Switch>
      </div>
    </Router>
  )
}
