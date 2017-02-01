import { connect } from 'react-redux';
import MessageSubmit from './message_submit';

const mapStateToProps = ( state ) => ({
  subscribeChannels: state.channel.subscribeChannels
});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageSubmit);
