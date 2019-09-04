import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './containers';
import TicketList from './components/TicketList'
import NewTicketForm from './components/NewTicketForm'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TicketList} />
    <Route path="/newticket" component={NewTicketForm} />
  </Switch>
);

export default Routes;
