import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import { WithContext as ReactTags } from 'react-tag-input';


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
    width                 : '80%',
    height                : '40%',
    minWidth             : '385px',
    minHeight            : '300px',
    transform             : 'translate(-50%, -50%)'
  }
};

class DmModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      tags: [],
      suggestions: [],
      input: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleDmChannelSubmit = this.handleDmChannelSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.suggestions = this.suggestions.bind(this);
    this.placeholder = this.placeholder.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
  }

  handleDmChannelSubmit() {
    if (!(this.state.tags.length === 0) && (this.state.input.length === 0)) {
      let newTags = this.state.tags;
      newTags.push({id: 0, text: this.props.currentUser.username});
      this.props.createDmChannel(newTags);
      this.closeModal();
    }
  }

  openModal () {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal () {
    this.setState({
      modalIsOpen: false,
      suggestions: [],
      tags: []
    });
  }

  handleDelete(i) {
    let tags = this.state.tags;
    let deleteTag = tags[1];

    let index = this.state.suggestions.indexOf(this.state.tags[i].text);
    let newSuggestions = this.state.suggestions;
    newSuggestions.splice(index, 1);
    tags.splice(i, 1);

    this.setState({tags: tags, suggestions: newSuggestions});
  }

  handleAddition(tag) {
    let allUsers = this.props.allUsers.map((user) => ( user.username ));
    if (allUsers.indexOf(tag) > -1) {
      let tags = this.state.tags;
      tags.push({
          id: tags.length + 1,
          text: tag
      });
      let newSuggestions = this.state.suggestions;
      newSuggestions.push(tags[tags.length - 1].text);

      this.setState({tags: tags, suggestions: newSuggestions, input: ""});
      document.getElementById("dh-channel-submit").className = "dm-enable";
    }
  }

  handleDrag(tag, currPos, newPos) {
     let tags = this.state.tags;

     // mutate array
     tags.splice(currPos, 1);
     tags.splice(newPos, 0, tag);

     // re-render
     this.setState({ tags: tags });
 }

  suggestions() {
    let allUsers;
    let suggestedUser;
    if (this.props.allUsers) {
      allUsers = this.props.allUsers.map((user) => ( user.username )) ;
      suggestedUser = allUsers.filter((username) => ((this.state.suggestions.indexOf(username) < 0) && (username !== this.props.currentUser.username)));
      // this.setState({suggestions: suggestedUser});
    }
    return suggestedUser;
  }

  placeholder() {
    if (this.state.tags.length === 0) {
      return "Find or start a conversation";
    } else {
      return "";
    }
  }

  handleInputChange(input) {
    this.setState({input: input});
    if ((this.state.tags.length !== 0) && (input.length === 0)) {
      document.getElementById("dh-channel-submit").className = "dm-enable";
    } else {
      document.getElementById("dh-channel-submit").className = "dm-disable";
    }
  }

  afterOpenModal() {
    // this.setState({
    //   suggestions: []
    // });
  }

  render() {
    let tags = this.state.tags;
    let suggestions = this.state.suggestions;
    return (
      <div>
        <button onClick={this.openModal} className="channel-dm-modal-button"> Direct Message</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          onAfterOpen={this.afterOpenModal}
          style={customStyles}>
            <div>

              <form onSubmit={this.handleDmChannelSubmit}>
              <ReactTags tags={tags}
                  minQueryLength={1}
                  handleInputChange={this.handleInputChange}
                  suggestions={this.suggestions()}
                  placeholder={this.placeholder()}
                  handleDelete={this.handleDelete}
                  handleAddition={this.handleAddition}
                  handleDrag={this.handleDrag} />
                <input type="submit" id="dh-channel-submit" className="dm-disable" value="Go"></input>
              </form>

            </div>

        </Modal>
      </div>
    );
  }
}

export default DmModal;
