import { connect } from 'react-redux';
import Channel from './channel';
import { logout } from '../../actions/session_actions';
import { fetchChannels, changeChannel } from '../../actions/channel_actions.js';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  channels: state.channel.channels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: (user) => dispatch(logout(user)),
  fetchChannels: () => dispatch(fetchChannels()),
  changeChannel: (channel) => dispatch(changeChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel);
