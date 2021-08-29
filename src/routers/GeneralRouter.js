import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from "./Header";
import { Footer } from "./Footer";

import { EventDesing } from '../components/EventDesing';

export const GeneralRouter = () => {
  return (
    <div className="container">
      <Header/>
        <Switch>
          <Route exact path="/events/:eventId" component={ EventDesing } />
          <Route component={() => {
            window.location.href = `${window.location.href}main.html`;
            return null;
          }} />
          <Redirect to="/"/>
        </Switch>
      <Footer/>
    </div>
  )
}
