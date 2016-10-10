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
