import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router';

const customStyles = {
    overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 1)'
  },

  content : {
    top                   : '45%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    border                : '1px solid #e7e7e7',
    margin                : '0 auto',
    width                 : '40%',
    height                : '40%',
    minWidth             : '385px',
    minHeight            : '300px',
    transform             : 'translate(-50%, -50%)'
  }
};

class LoginMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      user: {username: "",
      password: ""}
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  openModal () {
    this.setState({
      modalIsOpen: true
    });
  }

  update(field) {
    if (field === "username") {
      return e => this.setState({
        user: { username: e.currentTarget.value,
          password: this.state.user.password}
      });
    } else {
      return e => this.setState({
        user: { username: this.state.user.username,
          password: e.currentTarget.value}
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state.user;
    this.props.login({user: user});
  }

  renderErrors() {
    if (this.props.loginErrors.length) {
      return(
        <ul className="login-singup-errors">
          {this.props.loginErrors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.setState({
      modalIsOpen: false
    });
    this.props.logout();
  }

  closeModal () {
    this.setState({
      modalIsOpen: false
    });
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div>
          <button onClick={this.logoutUser} className="logout-button"> Logout</button>
          <li className="chatApp-link"><Link to="/messages" >Chat Room</Link></li>
        </div>
        );
    } else {
      return (
        <div>
          <button onClick={this.openModal} className="modal-button"> Login</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}>
              <form onSubmit={this.handleSubmit} className="login-form-box">
      					<h2 className="welcome-login" >Welcome back to Snap!</h2>
      					<br/>
      					<h3 className="please-login">Enter your username and password to log in.</h3>
                { this.renderErrors() }
      					<div className="login-form">
      						<br/>
      							<input type="text"
      								value={this.state.username}
      								onChange={this.update("username")}
      								className="login-input"
                      placeholder="username" />

      							<input type="password"
      								value={this.state.password}
      								onChange={this.update("password")}
      								className="login-input"
                      placeholder="password" />

      						<br/>
      						<input className="login-submit" type="submit" value="Submit" />
      					</div>
      				</form>
          </Modal>
        </div>
      );
    }
  }
}

// <button onClick={this.closeModal}>Close</button>
// <SessionFormContainer/>
export default LoginMenu;
