import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header'
import TicketList from './components/TicketList';

const App = () => (
  <BrowserRouter>
    <main className="container">
      <Header />
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;






// <ul className="left">
//   <li>
//     <Link to="/">Home</Link>
//   </li>
//   <li>
//     <Link to="/about">About</Link>
//   </li>
// </ul>
