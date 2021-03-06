import React from 'react';
import LoginMenu from './login_menu/login_menu_container'
import { Link } from 'react-router';
import SignupContainer from './signup/signup_container';

const App = ({ children }) => (
  <div className="app">
    <header className="header group">
      <h1 className="snap-logo"><Link to="/" >Snap</Link></h1>
      <ul className="navbar">
        <LoginMenu />
      </ul>
    </header>
    {children}
  </div>
);
// <SignupContainer/>

export default App;
