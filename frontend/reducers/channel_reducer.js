import merge from 'lodash/merge';

import {
  RECEIVE_CHANNELS,
  DELETE_CHANNEL,
  CHANGE_CHANNEL,
  RECEIVE_CHANNEL_ERRORS
} from '../actions/channel_actions';

const _defaultState = Object.freeze({
  currentChannel: {},
  channels: {},
  channelErrors: []
});

const ChannelReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      const channels = action.channels;
      return merge({}, _defaultState, {channels: channels});
    case DELETE_CHANNEL:
      let newChannels = {};
      newChannels = state;
      delete newChannels[action.channel.id];
      return merge({}, newChannels);
    case CHANGE_CHANNEL:
      return merge({}, state, {currentChannel: action.channel});
    case RECEIVE_CHANNEL_ERRORS:
      const channelErrors = action.channelErrors;
      return merge({}, state, channelErrors);
    default:
      return state;
  }
};

export default ChannelReducer;
