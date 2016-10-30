import React from 'react';
import { Link, hashHistory } from 'react-router';

class ChatHeader extends React.Component {
	constructor(props) {
		super(props);
    this.renderChannelDescription = this.renderChannelDescription.bind(this);
    this.renderNumOnline = this.renderNumOnline.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(e) {
		e.preventDefault();
		this.props.goOffline(this.props.currentUser.username);
		this.props.logout();
		hashHistory.push("/");
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
					<button onClick={this.handleLogout} className="chat-logout">Logout</button>
      </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

// <ul className="color-scheme-container">
// 	<li className="color-scheme-1 color-scheme">_</li>
// 	<li className="color-scheme-2 color-scheme">_</li>
// 	<li className="color-scheme-3 color-scheme">_</li>
// 	<li className="color-scheme-4 color-scheme">_</li>
// 	<li className="color-scheme-5 color-scheme">_</li>
// 	<li className="color-scheme-6 color-scheme">_</li>
// </ul>
export default ChatHeader;
