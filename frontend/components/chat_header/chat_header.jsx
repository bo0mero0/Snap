import React from 'react';
import { Link, hashHistory } from 'react-router';

class ChatHeader extends React.Component {
	constructor(props) {
		super(props);
    this.renderChannelDescription = this.renderChannelDescription.bind(this);
    this.renderNumOnline = this.renderNumOnline.bind(this);

	}



	handleLogout(e) {

	}

  renderChannelDescription() {
    let description;
    for (var id in this.props.subscribeChannels) {
      if (this.props.subscribeChannels[id].title === this.props.currentChannel) {
        description = this.props.subscribeChannels[id].description;
        break;
      }
    }
    return description;
  }

  renderNumOnline() {
    if (this.props.onlineChannels[this.props.currentChannel]) {
      return this.props.onlineChannels[this.props.currentChannel];
    } else {
      return "1";
    }
  }

	render() {
    if (this.props.currentChannel) {
      return (
        <div className="chat-header group">
          <div className="channel-info">
            <img src={window.snapAssets.favicon_icon_bw} alt="MDN"/>
            <div className="chat-header-channel-name">{this.props.currentChannel}</div>
            <div className="num-user-online"><span>{this.renderNumOnline()}</span> members online</div>
            <div className="channel-description">"{this.renderChannelDescription()}!"</div>
          </div>
      </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

export default ChatHeader;
