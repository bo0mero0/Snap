import { connect } from 'react-redux';
import Channel from './channel';
import { logout } from '../../actions/session_actions';
import { changeChannel, unsubscribeToChannel } from '../../actions/channel_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  allChannels: state.channel.allChannels,
  subscribeChannels: state.channel.subscribeChannels,
  currentChannel: state.channel.currentChannel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: (user) => dispatch(logout(user)),
  changeChannel: (channel) => dispatch(changeChannel(channel)),
  unsubscribeToChannel: (channelId) => dispatch(unsubscribeToChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
