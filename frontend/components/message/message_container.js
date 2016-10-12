import { connect } from 'react-redux';
import Message from './message';
import { fetchMessages, createMessage, receiveNotification} from '../../actions/message_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channel.currentChannel,
  messages: state.message.messages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMessages: (channelName) => dispatch(fetchMessages(channelName)),
  createMessage: (message) => dispatch(createMessage(message)),
  receiveNotification: (channelName) => dispatch(receiveNotification(channelName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
