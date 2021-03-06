import { connect } from 'react-redux';
import SubscribeModal from './subscribe_modal';
import { changeChannel, subscribeToChannel } from '../../actions/channel_actions';

const mapStateToProps = ( state ) => {
  return ({
  currentUser: state.session.currentUser,
  allChannels: state.channel.allChannels,
  subscribeChannels: state.channel.subscribeChannels,
  currentChannel: state.channel.currentChannel
});
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeChannel: (channel) => dispatch(changeChannel(channel)),
  subscribeToChannel: (channelId) => dispatch(subscribeToChannel(channelId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubscribeModal);
