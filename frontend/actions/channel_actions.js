export const CREATE_CHANNEL = "CREATE_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const FETCH_CHANNELS = "FETCH_CHANNELS";
export const CHANGE_CHANNEL = "CHANGE_CHANNEL";
export const FETCH_SUBSCRIBE_CHANNELS = "FETCH_SUBSCRIBE_CHANNELS";
export const RECEIVE_SUBSCRIBE_CHANNELS = "RECEIVE_SUBSCRIBE_CHANNELS";
export const SUBCRIBE_TO_CHANNEL = "SUBCRIBE_TO_CHANNEL";
export const UNSUBCRIBE_TO_CHANNEL = "UNSUBCRIBE_TO_CHANNEL";
export const CREATE_DM_CHANNEL = "CREATE_DM_CHANNEL";
export const RECEIVE_DM_CHANNELS = "RECEIVE_DM_CHANNELS";
export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";
export const FETCH_NOTI = "FETCH_NOTI";
export const RECEIVE_ONLINE_CHANNELS = "RECEIVE_ONLINE_CHANNELS";
export const FETCH_ONLINE_CHANNELS = "FETCH_ONLINE_CHANNELS";


export const createChannel = (channel) => ({
  type: CREATE_CHANNEL,
  channel
});

export const deleteChannel = (channel) => ({
  type: DELETE_CHANNEL,
  channel
});

export const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
});

export const receiveSubscribeChannels = (channels) => ({
  type: RECEIVE_SUBSCRIBE_CHANNELS,
  channels
});

export const changeChannel = (channel) => ({
  type: CHANGE_CHANNEL,
  channel
});

export const receiveChannelErrors = (channelErrors) => ({
  type: RECEIVE_CHANNEL_ERRORS,
  channelErrors
});

export const receiveDmChannels = (channels) => ({
  type: RECEIVE_DM_CHANNELS,
  channels
})

export const fetchChannels = () => ({
  type: FETCH_CHANNELS,
});

export const fetchSubscribeChannels = (currentUserId) => ({
  type: FETCH_SUBSCRIBE_CHANNELS,
  currentUserId
});

export const subscribeToChannel = (channelId) => ({
  type: SUBCRIBE_TO_CHANNEL,
  channelId
});

export const unsubscribeToChannel = (channelId, userId) => ({
  type: UNSUBCRIBE_TO_CHANNEL,
  channelId,
  userId
});

export const createDmChannel = (users) => ({
  type: CREATE_DM_CHANNEL,
  users
});

export const deleteNotification = (notification) => ({
  type: DELETE_NOTIFICATION,
  notification
});

export const fetchNoti = (userId) => ({
  type: FETCH_NOTI,
  userId
});

export const receiveOnlineChannels = (channels) => ({
  type: RECEIVE_ONLINE_CHANNELS,
  channels
});

export const fetchOnlineChannels = () => ({
  type: FETCH_ONLINE_CHANNELS
});
