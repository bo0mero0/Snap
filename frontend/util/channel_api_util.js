export const fetchChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    success,
    error
  });
};

export const deleteChannel = (channelId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/channel/${channelId}`,
    success,
    error
  });
};


export const createChannel = (channel, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/channels',
    data: channel,
    success,
    error
  });
};
