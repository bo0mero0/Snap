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
    width                 : '40%',
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
      tags: []
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleCreateDmChannel = this.handleCreateDmChannel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);

  }

  handleCreateDmChannel(e) {
    this.props.createDmChannel();
    this.closeModal();
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

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  }

  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
        id: tags.length + 1,
        text: tag
    });
    this.setState({tags: tags});
  }

  handleDrag(tag, currPos, newPos) {
     let tags = this.state.tags;

     // mutate array
     tags.splice(currPos, 1);
     tags.splice(newPos, 0, tag);

     // re-render
     this.setState({ tags: tags });
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
          style={customStyles}>
            <div>
              <div>hello</div>
                <div>
                  <ReactTags tags={tags}
                      suggestions={suggestions}
                      handleDelete={this.handleDelete}
                      handleAddition={this.handleAddition}
                      handleDrag={this.handleDrag} />
                  </div>
            </div>

        </Modal>
      </div>
    );
  }
}

export default DmModal;
