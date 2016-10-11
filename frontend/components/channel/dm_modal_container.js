import { connect } from 'react-redux';
import DmModal from './dm_modal';
import { changeChannel, createDmChannel } from '../../actions/channel_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  currentChannel: state.channel.currentChannel,
  allUsers: state.session.allUsers
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeChannel: (channel) => dispatch(changeChannel(channel)),
  createDmChannel: (users) => dispatch(createDmChannel(users))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DmModal);
