import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { hashHistory, Link } from 'react-router';
import SubscribeModal from './subscribe_modal_container';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChannel: {},
      channels: {}
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
    debugger
    this.props.unsubscribeToChannel(e.currentTarget.value);
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
                  <div onClick={this.handleUnsubscribe} value={parseInt(channelName[1])}>ⓧ</div>
                </li>);
      } else {
        debugger
        return (<li className="channel"  key={channelName[1]}>
                  <Link to={"messages/" + channelName[0]}>✒ {channelName[0]}</Link>
                  <div onClick={this.handleUnsubscribe} value={parseInt(channelName[1])}>ⓧ</div>
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
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Channel;
