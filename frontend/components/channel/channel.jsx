import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { hashHistory, Link } from 'react-router';
import SubscribeModal from './subscribe_modal_container';
import DmModal from './dm_modal_container';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannel: {},
    };
    this.renderChannels = this.renderChannels.bind(this);
    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
    // this.channelSelector = this.channelSelector.bind(this);
  }

  componentDidMount() {
    if (!this.props.currentChannel) {
      hashHistory.push(`/messages/Awesome`);
    }
  }

  // channelSelector (e) {
  //   this.setState({
  //     currentChannel: this.props.channels[e.currentTarget.value]
  //   });
  //   this.props.changeChannel(this.props.channels[e.currentTarget.value].title);
  // }

  handleUnsubscribe(e) {
    this.props.unsubscribeToChannel(e.currentTarget.value);
    hashHistory.push(`/messages/Awesome`);
  }

  renderChannels() {
    let channelsName = [];
    for (var id in this.props.subscribeChannels) {
        channelsName.push([this.props.subscribeChannels[id].title, id]);
    }
    let channelsHtml = channelsName.map( channelName => {
      if ( channelName[0] === this.props.currentChannel) {
        return (<li className="current-channel"  key={channelName[1]} >
                  <Link to={"messages/" + this.props.currentChannel}>✒ {channelName[0]}</Link>
                  <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                </li>);
      } else {
        return (<li className="channel"  key={channelName[1]}>
                  <Link to={"messages/" + channelName[0]}>✒ {channelName[0]}</Link>
                  <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                </li>);
      }
  });
    return channelsHtml;
  }



  render () {
    return (
      <div className="channel-sidebar group">
        <div className="channels-container">
          <h3 className="channel-header">✑ {this.props.currentUser.username}</h3>
          <SubscribeModal/>
          <ul className="channels">
            { this.renderChannels() }
          </ul>
          <DmModal/>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Channel;
