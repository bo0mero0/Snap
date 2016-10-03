## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

### Channels API Request Actions

* `fetchChannels`
  0. getChannels in channelMiddleware
  0. GET ajax call
  0. receiveChannels in ChannelReducer
* `CreateChannel`
  0. invoked channelForm Submit
  0. POST ajax call
  0. recieveChannels in ChannelReducer
* `fetchChannel`
  0. invoke channel onCLick
  0. POST ajax call
  0. recieveChannel in ChannelReducer
* `destroyChannel`
  0. invoked channel deleteButton onClick
  0. POST ajax call
  0. removeChannel in ChannelReducer

### Channel API response Actions

* `receivechannels`
  0. callback api
  0. channelReducer updatechannels in App's State
* `receivechannel`
  0. callback api
  0. channelReducer updatechannel in App's State
* `removeChanel`
  0. callback api
  0. channelReducer removechannel[id] in App's State

### Messages API Request Actions

* `fetchMessages`
  0. getMessages in messageMiddleware
  0. GET ajax call
  0. receiveMessages in messageReducer
* `CreateMessage`
  0. invoked Chat Submit
  0. POST ajax call
  0. recieveMessage in messageReducer
* `updateMessage` (more research required)
  0. websocket
  0. websocket
  0. websocket
* `destroyMessage`
  0. invoked message deleteButton onClick
  0. DELETE ajax call
  0. removemessage in messageReducer

### Messages API response Actions

* `receiveMessages`
  0. callback api
  0. messageReducer updateMessages in App's State
* `receiveMessage`
  0. callback api
  0. messageReducer updateMessages in App's State
* `removeMessage`
  0. callback api
  0. messageReducer removeMessage[id] in App's State
