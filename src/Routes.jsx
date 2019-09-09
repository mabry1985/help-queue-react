import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';
import NewTicketControl from './components/NewTicketControl';




const Routes = (props) => (
  <Switch>
  {  console.log(props)};

    <Route exact path="/" render={()=><TicketList ticketList={props.masterTicketList} />} />
    <Route path="/newticket" render={()=><NewTicketControl onNewTicketCreation={props.handleAddingNewTicketToList} />} />
  </Switch>
);

export default Routes;
