import { connect } from 'react-redux';
import SubscribeModal from './subscribe_modal';
import { changeChannel } from '../../actions/channel_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  allChannels: state.channel.allChannels,
  subscribeChannels: state.channel.subscribeChannels,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeChannel: (channel) => dispatch(changeChannel(channel)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribeModal);
