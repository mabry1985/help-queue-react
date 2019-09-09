import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';
import NewTicketControl from './components/NewTicketControl';

// the lesson specifies this.handleAddingNewTicketToList for the route,
//but because this is happening in Routes and not App,
//the value of "this" has changed, so we need to import the App and use it instead
import App from './App';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TicketList} />
    <Route path="/newticket" render={()=><NewTicketControl onNewTicketCreation={App.handleAddingNewTicketToList} />} />
  </Switch>
);

export default Routes;
