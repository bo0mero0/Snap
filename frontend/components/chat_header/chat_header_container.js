import { connect } from 'react-redux';
import ChatHeader from './chat_header';

import { logout } from '../../actions/session_actions';


const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channel.currentChannel,
  onlineChannels: state.channel.onlineChannels,
  subscribeChannels: state.channel.subscribeChannels
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHeader);
