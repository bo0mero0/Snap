import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ChannelReducer from './channel_reducer';
import MessageReducer from './message_reducer';

export default combineReducers({
  session: SessionReducer,
  channel: ChannelReducer,
  message: MessageReducer
});
