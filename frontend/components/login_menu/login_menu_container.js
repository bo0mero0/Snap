import { connect } from 'react-redux';
import LoginMenu from './login_menu';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginMenu);
