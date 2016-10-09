import merge from 'lodash/merge';

import {
  RECEIVE_CHANNELS,
  DELETE_CHANNEL,
  CHANGE_CHANNEL,
  RECEIVE_CHANNEL_ERRORS,
  UPDATE_CURRENT_CHANNEL
} from '../actions/channel_actions';

const _defaultState = Object.freeze({
  currentChannel: null,
  channels: {},
  channelErrors: []
});

const ChannelReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      const channels = action.channels;
      return merge({}, state, {channels: channels});
    case DELETE_CHANNEL:
      let newChannels = {};
      newChannels = state.channels;
      delete newChannels[action.channel.id];
      return merge({}, {channels: newChannels});
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
