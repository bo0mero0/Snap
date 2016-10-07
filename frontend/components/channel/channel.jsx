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
    this.channelSelector = this.channelSelector.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  channelSelector (e) {
    this.setState({
      currentChannel: this.props.channels[e.currentTarget.value]
    });
  }

  renderChannels() {
    let channelsName = [];
    for (var id in this.props.channels) {
        channelsName.push([this.props.channels[id].title, id]);
    }
    let channelsHtml = channelsName.map( channelName => {
      if ( channelName[0] === this.state.currentChannel.title ) {
        return (<li className="current-channel" onClick={this.channelSelector} key={channelName[1]} value={channelName[1]}>{channelName[0]}</li>);
      } else {
        return (<li className="channel" onClick={this.channelSelector} key={channelName[1]} value={channelName[1]}>{channelName[0]}</li>);
      }
  });

    return channelsHtml;
  }


  render () {
    return (
      <div className="channel-sidebar group">
        <h3 className="channel-header">✒ {this.props.currentUser.username}</h3>
        <ul className="channels">
          { this.renderChannels() }
        </ul>
      </div>
    );
  }


}

export default Channel;
