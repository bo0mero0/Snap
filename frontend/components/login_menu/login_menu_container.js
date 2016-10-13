import { connect } from 'react-redux';
import LoginMenu from './login_menu';
import { login, logout, goOffline } from '../../actions/session_actions';

const mapStateToProps = ( state ) => ({
  currentUser: state.session.currentUser,
  loginErrors: state.session.loginErrors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  login: (user) => dispatch(login(user)),
  goOffline: (username) => dispatch(goOffline(username))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginMenu);
