import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ChannelMiddleware from './channel_middleware';
import MessageMiddleware from './message_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ChannelMiddleware,
  MessageMiddleware
);

export default RootMiddleware;
