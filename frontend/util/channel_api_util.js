export const fetchChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/channels',
    success,
    error
  });
};

export const apiFetchSubscribeChannels = (currentUserId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `/api/channels/${currentUserId}`,
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

export const subscribeToChannel = (channelId, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/channels/${channelId}/subscribe`,
    data: {channelId: channelId},
    success,
    error
  });
};

export const unsubscribeToChannel = (channelId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/channels/${channelId}/unsubscribe`,
    success,
    error
  });
};

export const createDmChannel = (users, success, error) => {
  $.ajax({
    method: 'POST',
    url: `api/channels/subscribe`,
    data: {users: users},
    success,
    error
  });
};

export const deleteNotification = (notification, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/notification`,
    data: {notification},
    error
  });
};

export const fetchNoti = (userId, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/notification`,
    data: {userId},
    success,
    error
  });
};

export const fetchOnlineChannels = (success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/onlineChannel`,
    success,
    error
  });
};
