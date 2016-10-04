import React from 'react';
import LoginMenu from './login_menu/login_menu_container'

const App = ({ children }) => (
  <div>
    <h1> Snap </h1>
    <LoginMenu/>
    {children}
  </div>
);

export default App;
