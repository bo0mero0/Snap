export const fetchMessages = (channelName, success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/messages',
    data: {channelName: channelName},
    success,
    error
  });
};

export const deleteMessage = (messageId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/messages/${messageId}`,
    success,
    error
  });
};

export const createMessage = (message, success, error) => {
  $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: message,
    success,
    error
  });
};
