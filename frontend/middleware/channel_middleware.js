import {
  receiveChannels,
  receiveChannelErrors,
  receiveSubscribeChannels,
  receiveDmChannels,
  receiveOnlineChannels,
  CREATE_CHANNEL,
  DELETE_CHANNEL,
  FETCH_CHANNELS,
  FETCH_SUBSCRIBE_CHANNELS,
  FETCH_ONLINE_CHANNELS,
  SUBCRIBE_TO_CHANNEL,
  UNSUBCRIBE_TO_CHANNEL,
  CREATE_DM_CHANNEL,
  DELETE_NOTIFICATION,
  FETCH_NOTI
} from '../actions/channel_actions';

import {receiveNotifications} from '../actions/message_actions';

import { fetchChannels,
          deleteChannel,
          createChannel,
          fetchSubscribeChannels,
          subscribeToChannel,
          unsubscribeToChannel,
          createDmChannel,
          deleteNotification,
          fetchNoti,
          fetchOnlineChannels } from '../util/channel_api_util';

export default ({getState, dispatch}) => next => action => {
  const successChannelsCallback = channels => dispatch(receiveChannels(channels));
  const successFetchNotiCallback = notifications => dispatch(receiveNotifications(notifications));
  const successSubscribeChannelsCallback = channels => dispatch(receiveSubscribeChannels(channels));
  const successOnlineChannelCallBack = (channels) => dispatch(receiveOnlineChannels(channels));
  const successDmChannelsCallback = channels => dispatch(receiveDmChannels(channels));
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
    case CREATE_DM_CHANNEL:
      createDmChannel(action.users, successDmChannelsCallback, channelErrorCallback );
      return next(action);
    case DELETE_NOTIFICATION:
      deleteNotification(action.notification, channelErrorCallback );
      return next(action);
    case FETCH_NOTI:
      fetchNoti(action.userId, successFetchNotiCallback, channelErrorCallback );
      return next(action);
    case FETCH_ONLINE_CHANNELS:
      fetchOnlineChannels(successOnlineChannelCallBack, channelErrorCallback);
      return next(action);
    default:
      return next(action);
  }
};
