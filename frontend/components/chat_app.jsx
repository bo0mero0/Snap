import React from 'react';
import { Link } from 'react-router';
import ChannelContainer from './channel/channel_container';

const chatApp = ({ children }) => (
  <div className="chatApp">
    <ChannelContainer/>
    <header >
      <h1 className="construction"><Link to="/" >Oh Snap coming soon...</Link></h1>
    </header>
    {children}
  </div>
);

export default chatApp;
