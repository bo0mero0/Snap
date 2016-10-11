import merge from 'lodash/merge';

import {
  RECEIVE_CHANNELS,
  RECEIVE_SUBSCRIBE_CHANNELS,
  RECEIVE_DM_CHANNELS,
  DELETE_CHANNEL,
  CHANGE_CHANNEL,
  RECEIVE_CHANNEL_ERRORS
} from '../actions/channel_actions';

const _defaultState = Object.freeze({
  currentChannel: null,
  subscribeChannels: null,
  dmChannels: null,
  allChannels: {},
  channelErrors: []
});

const ChannelReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      const channels = action.channels;
      return merge({}, state, {allChannels: channels});
    case RECEIVE_SUBSCRIBE_CHANNELS:
      const receiveChannels = action.channels;
      const newState = state;
      newState.subscribeChannels = receiveChannels;
      return merge({}, newState);
    case DELETE_CHANNEL:
      let newChannels = {};
      newChannels = state.subscribeChannels;
      delete newChannels[action.channel.id];
      return merge({}, {subscribeChannels: newChannels});
    case CHANGE_CHANNEL:
      return merge({}, state, {currentChannel: action.channel});
    case RECEIVE_CHANNEL_ERRORS:
      const channelErrors = action.channelErrors;
      return merge({}, state, channelErrors);
    case RECEIVE_DM_CHANNELS:
      const receiveDmChannels = action.channels;
      const newDmState = state;
      newDmState.DmChannels = receiveDmChannels;
      return merge({}, newDmState);
    default:
      return state;
  }
};

export default ChannelReducer;
