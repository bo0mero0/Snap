import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
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
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  closeModal () {
    this.setState({
      modalIsOpen: false
    });
  }
  // { this.renderErrors() }

  render () {
    return (
      <div>
        <button onClick={this.openModal} className="modal-button"> Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
            <form onSubmit={this.handleSubmit} className="login-form-box">
    					Welcome back to Snap!
    					<br/>
    					Please log in
    					<div className="login-form">
    						<br/>
    						<label> Username:
    							<input type="text"
    								value={this.state.username}
    								onChange={this.update("username")}
    								className="login-input" />
    						</label>

    						<br/>
    						<label> Password:
    							<input type="password"
    								value={this.state.password}
    								onChange={this.update("password")}
    								className="login-input" />
    						</label>

    						<br/>
    						<input type="submit" value="Submit" />
    					</div>
    				</form>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }

}

// <SessionFormContainer/>
export default LoginMenu;
