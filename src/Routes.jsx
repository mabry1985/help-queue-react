import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TicketList from './components/TicketList';
import NewTicketForm from './components/NewTicketForm';
import NewTicketControl from './components/NewTicketControl';
import Admin from './components/Admin';
import Error404 from './components/Error404';

const Routes = (props) => (
  <Switch>
  {  console.log(props)};

    <Route exact path="/" render={()=><TicketList
                            ticketList={props.ticketList} />} />
    <Route path="/newticket" render={()=><NewTicketControl
                               onNewTicketCreation={props.handleAddingNewTicketToList} />} />
    <Route path='/admin' render={(props)=><Admin
                               ticketList={props.ticketList}
                               currentRouterPath={props.location.pathname}/>} />
    <Route component={Error404} />
  </Switch>
);

export default Routes;
