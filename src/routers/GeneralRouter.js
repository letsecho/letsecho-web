import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from "./Header";
import { Footer } from "./Footer";

import { Faq } from '../components/Faq';
import { Privacy } from '../components/Privacy';
import { Terms } from '../components/Terms';
import { EventDesing } from '../components/EventDesing';

export const GeneralRouter = () => {
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/events/:eventId" component={ EventDesing } />
        <Route exact path="/faq" component={ Faq } />
        <Route exact path="/privacy" component={ Privacy } />
        <Route exact path="/terms" component={ Terms } />
        <Redirect to="/index" />
      </Switch>
      <Footer/>
    </div>
  )
}
