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
    this.renderDmChannels = this.renderDmChannels.bind(this);
    this.handleUnsubscribe = this.handleUnsubscribe.bind(this);
    this.deleteNoti = this.deleteNoti.bind(this);
    // this.channelSelector = this.channelSelector.bind(this);
  }

  componentDidMount() {
    this.props.deleteNotification({channelName: this.props.params.channelName, userId: this.props.currentUser.id});
    this.props.receiveDeleteNoti(this.props.params.channelName);
    if (!this.props.params.channelName) {
      hashHistory.push(`/messages/general`);
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

  deleteNoti() {
    this.props.deleteNotification({channelName: this.props.params.channelName, userId: this.props.currentUser.id});
    this.props.receiveDeleteNoti(this.props.params.channelName);
  }

  renderChannels() {
    let channelsName = [];
    for (var id in this.props.subscribeChannels) {
      if (this.props.subscribeChannels[id].channel_type === "channel") {
        channelsName.push([this.props.subscribeChannels[id].title, id]);
      }
    }
    let channelsHtml = channelsName.map( channelName => {
      // console.log(Object.keys(this.props.notification));
      // console.log(Object.keys(this.props.notification).indexOf(channelName[0]));
      if ( channelName[0] === this.props.currentChannel) {
        return (<li className="current-channel"  key={channelName[1]} >
                  <Link onClick={this.deleteNoti} to={"messages/" + this.props.currentChannel}>✒ {channelName[0]}</Link>
                  <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                </li>);
      } else {
        if ((Object.keys(this.props.notification).length) && (Object.keys(this.props.notification).indexOf(channelName[0]) >= 0)) {
          return (<li className="noti-channel"  key={channelName[1]}>
                    <Link onClick={this.deleteNoti} to={"messages/" + channelName[0]}>✒ {channelName[0]}</Link>
                    <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                  </li>);
        } else {
          return (<li className="channel"  key={channelName[1]}>
                    <Link onClick={this.deleteNoti} to={"messages/" + channelName[0]}>✒ {channelName[0]}</Link>
                    <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                  </li>);
        }
      }
    });
    return channelsHtml;
  }

  renderDmChannels() {
    let channelsName = [];
    for (var id in this.props.subscribeChannels) {
      if (this.props.subscribeChannels[id].channel_type === "dm") {
        channelsName.push([this.props.subscribeChannels[id].title, id]);
      }
    }
    let channelsHtml = channelsName.map( channelName => {
      if ( channelName[0] === this.props.currentChannel) {
        return (<li className="current-channel"  key={channelName[1]} >
                  <Link onClick={this.deleteNoti} to={"messages/" + this.props.currentChannel}>✒ {channelName[0]}</Link>
                  <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                </li>);
      } else {
        if ((Object.keys(this.props.notification).length) && (Object.keys(this.props.notification).indexOf(channelName[0]) >= 0)) {
          return (<li className="noti-dm-channel"  key={channelName[1]}>
                    <Link onClick={this.deleteNoti} to={"messages/" + channelName[0]}>✒ {channelName[0]}</Link>
                    <button value={channelName[1]}>{this.props.notification[channelName[0]]}</button>
                  </li>);
        } else {
          return (<li className="channel"  key={channelName[1]}>
                    <Link onClick={this.deleteNoti} to={"messages/" + channelName[0]}>✒ {channelName[0]}</Link>
                    <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                  </li>);
        }
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
          <ul className="channels">
            { this.renderDmChannels() }
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Channel;
