import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import TicketList from './components/TicketList';
import Moment from 'moment';

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
            <Routes handleAddingNewTicketToList={this.handleAddingNewTicketToList}  masterTicketList={this.state.masterTicketList}/>
          </main>
        </BrowserRouter>
      </div>
    );
  }

}
export default App;
