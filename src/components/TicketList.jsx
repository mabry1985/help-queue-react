import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {

  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticket.id}/>
      )}
    </div>
  );

  Ticketlist.propTypes = {
    ticketList: PropTypes.array,
    currentRouterPath: PropTypes.string,
  };
}

export default TicketList;
