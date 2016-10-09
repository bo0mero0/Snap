import { connect } from 'react-redux';
import Channel from './channel';
import { logout } from '../../actions/session_actions';
import { changeChannel, updateCurrentChannel } from '../../actions/channel_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  channels: state.channel.channels,
  currentChannel: state.channel.currentChannel
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: (user) => dispatch(logout(user)),
  changeChannel: (channel) => dispatch(changeChannel(channel)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
