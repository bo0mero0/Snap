export const CREATE_CHANNEL = "CREATE_CHANNEL";
export const DELETE_CHANNEL = "DELETE_CHANNEL";
export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const FETCH_CHANNELS = "FETCH_CHANNELS";
export const CHANGE_CHANNEL = "CHANGE_CHANNEL";

export const createChannel = (channel) => ({
  type: CREATE_CHANNEL,
  channel
});

export const deleteChannel = (channel) => ({
  type: DELETE_CHANNEL,
  channel
});

export const receiveChannels = (channels) => ({
  type: receiveChannels,
  channels
});

export const changeChannel = (channel) => ({
  type: CREATE_CHANNEL,
  channel
});

export const receiveChannelErrors = () => ({
  type: RECEIVE_CHANNEL_ERRORS
});

export const fetchChannels = () => ({
  type: FETCH_CHANNELS,
});
