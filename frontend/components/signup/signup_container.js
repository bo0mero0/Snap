import { connect } from 'react-redux';
import Signup from './signup';
import { signup } from '../../actions/session_actions';


const mapStateToProps = ( state ) => ({
    currentUser: state.session.currentUser,
    errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    signup: user => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
