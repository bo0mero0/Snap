import {
  receiveChannels,
  receiveChannelErrors,
  CREATE_CHANNEL,
  DELETE_CHANNEL,
  FETCH_CHANNELS
} from '../actions/channel_actions';

import { fetchChannels, deleteChannel, createChannel } from '../util/channel_api_util';

export default ({getState, dispatch}) => next => action => {
  const successChannelsCallback = channels => dispatch(receiveChannels(channels));
  const channelErrorCallback = xhr => {
    const errors = xhr.responseJSON;
    dispatch(receiveChannelErrors(errors));
  };

  switch(action.type) {
    case CREATE_CHANNEL:
      createChannel(action.channel, successChannelsCallback, channelErrorCallback);
      return next(action);
    case DELETE_CHANNEL:
      deleteChannel(action.channelId, () => next(action), channelErrorCallback);
      break;
    case FETCH_CHANNELS:
      fetchChannels(successChannelsCallback, channelErrorCallback);
      return next(action);
    default:
      return next(action);
  }
}
