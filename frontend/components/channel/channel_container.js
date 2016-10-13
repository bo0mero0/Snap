import { connect } from 'react-redux';
import Channel from './channel';
import { logout, goOffline } from '../../actions/session_actions';
import { changeChannel, unsubscribeToChannel, deleteNotification } from '../../actions/channel_actions';
import { receiveDeleteNoti } from '../../actions/message_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  allChannels: state.channel.allChannels,
  subscribeChannels: state.channel.subscribeChannels,
  currentChannel: state.channel.currentChannel,
  notification: state.message.notification,
  onlineChannels: state.channel.onlineChannels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: (user) => dispatch(logout(user)),
  changeChannel: (channel) => dispatch(changeChannel(channel)),
  unsubscribeToChannel: (channelId) => dispatch(unsubscribeToChannel(channelId)),
  deleteNotification: (notification) => dispatch(deleteNotification(notification)),
  receiveDeleteNoti: channelName => dispatch(receiveDeleteNoti(channelName)),
  goOffline: username => dispatch(goOffline(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
