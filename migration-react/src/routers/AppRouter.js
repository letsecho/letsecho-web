import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { EventDesing } from '../components/EventDesing';
import { GeneralRouter } from './GeneralRouter';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/event" component={ EventDesing } />
          <Route path="/" component={ GeneralRouter } />
        </Switch>
      </div>
    </Router>
  )
}
