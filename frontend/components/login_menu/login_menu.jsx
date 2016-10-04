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
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({
      modalIsOpen: true
    });
  }


  closeModal () {
    this.setState({
      modalIsOpen: false
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.openModal} > Login</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <h1>please log in</h1>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }

}

// <SessionFormContainer/>
export default LoginMenu;
