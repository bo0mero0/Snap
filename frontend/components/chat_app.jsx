import React from 'react';
import { Link } from 'react-router';
import ChannelContainer from './channel/channel_container';
import MessageContainer from './message/message_container';

const chatApp = ({ children }) => (
  <div className="chatApp">
    <ChannelContainer/>
    <MessageContainer/>
    {children}
  </div>
);

export default chatApp;
