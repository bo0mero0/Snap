import { connect } from 'react-redux';
import LoginMenu from './login_menu';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  signup: () => dispatch(signup()),
  login: () => dispatch(login()),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginMenu);
