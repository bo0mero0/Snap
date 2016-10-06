import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannel: {},
      channels: {}
    };
    this.renderChannels = this.renderChannels.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  renderChannels() {
    let channelsName = [];
    for (var id in this.props.channels) {
        channelsName.push([this.props.channels[id].title, id]);
    }
    let channelsHtml = channelsName.map( channelName => (
        <li key={channelName[1]} >{channelName[0]}</li>
    ));

    return channelsHtml;
  }

  render () {
    return (
      <div className="channel-sidebar group">
        <h3>✒ {this.props.currentUser.username}</h3>
        <ul>
          { this.renderChannels() }
        </ul>
      </div>
    );
  }


}

export default Channel;
