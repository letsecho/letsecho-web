import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { Faq } from '../components/Faq';
import { Privacy } from '../components/Privacy';
import { Terms } from '../components/Terms';
import { EventDesign } from '../components/EventDesign';

export const GeneralRouter = () => {
  return (
    <div className="container">
      <Header/>
        <Switch>
          <Route exact path="/events/:eventId" component={ EventDesign } />
          <Route exact path="/faq" component={ Faq } />
          <Route exact path="/privacy" component={ Privacy } />
          <Route exact path="/terms" component={ Terms } />
          <Redirect to="/" />
        </Switch>
      <Footer/>
    </div>
  )
}
