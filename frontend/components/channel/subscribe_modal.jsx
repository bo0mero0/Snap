import React from 'react';
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
    minWidth              : '385px',
    minHeight             : '300px',
    transform             : 'translate(-50%, -50%)'
  }
};

class SubscribeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderAllChannels = this.renderAllChannels.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
  }

  handleSubscribe(e) {
    this.props.subscribeToChannel(e.currentTarget.value);
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

  renderAllChannels() {
    let channelsName;
    let filteredChannelsId;
    if (Object.keys(this.props.allChannels).length > 0) {
      this.num_channels = Object.keys(this.props.allChannels).length;
      filteredChannelsId = this.props.allChannels || {};
      filteredChannelsId = Object.keys(filteredChannelsId).filter((key) => {
        return (Object.keys(this.props.subscribeChannels).indexOf(key) < 0) && (this.props.allChannels[key].channel_type === "channel");
      });
      channelsName = filteredChannelsId.map( id => {
        return (<li className="subscribe-channel"  key={id} value={id}
          onClick={this.handleSubscribe}>
          <Link className="subscribe-channel-link" to={"messages/" + this.props.allChannels[id].title}>
             ✑ {this.props.allChannels[id].title}
           </Link>
          <div className="sub-created_at">
            <ul>
              <li>Created by</li>
              <li className="creator">{this.props.allChannels[id].creator}</li>
              <li>on {this.props.allChannels[id].created_at}</li>
            </ul>
          </div>
        </li>
        );
      });
    }
    return channelsName;
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} className="channel-subscribe-modal-button"> CHANNELS <span>({this.num_channels})</span></button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}>
            <ul className="subscribe-channels-container">
              {this.renderAllChannels()}
            </ul>


        </Modal>
      </div>
    );
  }
}

export default SubscribeModal;
