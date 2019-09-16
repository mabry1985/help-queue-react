import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: [],
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateTicketElapsedWaitTime(),
    60000
  );
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleAddingNewTicketToList(newTicket) {
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true);
    newMasterTicketList.push(newTicket);
    this.setState({ masterTicketList: newMasterTicketList });
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({ masterTicketList: newMasterTicketList });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <main className="container">
            <Header />
            <Switch>
              <Route exact path="/" render={()=><TicketList
                                      ticketList={this.state.masterTicketList} />} />
              <Route path="/newticket" render={()=><NewTicketControl
                                         onNewTicketCreation={this.handleAddingNewTicketToList} />} />
              <Route path='/admin' render={(props)=><Admin
                                         ticketList={this.state.masterTicketList}
                                         currentRouterPath={props.location.pathname}/>} />
              <Route component={Error404} />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }

}
export default App;