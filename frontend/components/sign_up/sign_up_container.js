import { connect } from 'react-redux';
import Signup from './session_form';
import { signup } from '../../actions/session_actions';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {


  return {
    processForm: user => dispatch(signup(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
