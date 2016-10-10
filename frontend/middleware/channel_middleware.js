import {
  receiveChannels,
  receiveChannelErrors,
  receiveSubscribeChannels,
  CREATE_CHANNEL,
  DELETE_CHANNEL,
  FETCH_CHANNELS,
  FETCH_SUBSCRIBE_CHANNELS,
  SUBCRIBE_TO_CHANNEL,
  UNSUBCRIBE_TO_CHANNEL
} from '../actions/channel_actions';

import { fetchChannels,
          deleteChannel,
          createChannel,
          fetchSubscribeChannels,
          subscribeToChannel,
          unsubscribeToChannel} from '../util/channel_api_util';

export default ({getState, dispatch}) => next => action => {
  const successChannelsCallback = channels => dispatch(receiveChannels(channels));
  const successSubscribeChannelsCallback = channels => dispatch(receiveSubscribeChannels(channels));
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
    case FETCH_SUBSCRIBE_CHANNELS:
      fetchSubscribeChannels(action.currentUserId, successSubscribeChannelsCallback, channelErrorCallback );
      return next(action);
    case SUBCRIBE_TO_CHANNEL:
      subscribeToChannel(action.channelId, successSubscribeChannelsCallback, channelErrorCallback);
      return next(action);
    case UNSUBCRIBE_TO_CHANNEL:
      unsubscribeToChannel(action.channelId, successSubscribeChannelsCallback, channelErrorCallback);
      return next(action);
    default:
      return next(action);
  }
}
