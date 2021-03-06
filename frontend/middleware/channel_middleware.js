import {
  receiveChannels,
  receiveChannelErrors,
  receiveSubscribeChannels,
  receiveDmChannels,
  receiveOnlineChannels,
  fetchSubscribeChannels,
  CREATE_CHANNEL,
  DELETE_CHANNEL,
  FETCH_CHANNELS,
  FETCH_SUBSCRIBE_CHANNELS,
  FETCH_ONLINE_CHANNELS,
  SUBCRIBE_TO_CHANNEL,
  UNSUBCRIBE_TO_CHANNEL,
  CREATE_DM_CHANNEL,
  DELETE_NOTIFICATION,
  FETCH_NOTI,
  RECEIVE_DM_CHANNELS
} from '../actions/channel_actions';

import { hashHistory } from 'react-router';

import {receiveNotifications} from '../actions/message_actions';

import { fetchChannels,
          deleteChannel,
          apiFetchSubscribeChannels,
          createChannel,
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
  const successDmChannelsCallback = channels => {
    dispatch(fetchSubscribeChannels(getState().session.currentUser.id));
    dispatch(receiveDmChannels(channels));
  };
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
      apiFetchSubscribeChannels(action.currentUserId, successSubscribeChannelsCallback, channelErrorCallback );
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
    case RECEIVE_DM_CHANNELS:
      hashHistory.push(`/messages/${action.channels.title}`);
    default:
      return next(action);
  }
};
