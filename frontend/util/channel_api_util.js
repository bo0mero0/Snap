export const fetchChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/channel',
    success,
    error
  });
};

export const deleteChannel = (channelId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: '/api/channel',
    data: channelId,
    success,
    error
  });
};


export const createChannel = (channel, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/channel',
    data: channel,
    success,
    error
  });
};
