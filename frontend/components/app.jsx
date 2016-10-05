import React from 'react';
import LoginMenu from './login_menu/login_menu_container'

const App = ({ children }) => (
  <div className="app">
    <header className="header group">
      <h1> Snap </h1>
      <ul className="navbar">
        <LoginMenu />
      </ul>
    </header>
    {children}
  </div>
);

export default App;
