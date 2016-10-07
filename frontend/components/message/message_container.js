import { connect } from 'react-redux';
import Message from './message';
import { fetchMessages, createMessage} from '../../actions/message_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channel.currentChannel,
  messages: state.message.messages
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMessages: () => dispatch(fetchMessages()),
  createMessage: (message) => dispatch(createMessage(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
