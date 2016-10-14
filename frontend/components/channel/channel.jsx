/* globals Pusher */
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
    this.currentUser = this.currentUser.bind(this);
    // this.channelSelector = this.channelSelector.bind(this);
    const goOffline = this.props.goOffline.bind(this);
    window.onbeforeunload = () => {
      goOffline(this.props.currentUser.username);
    };
  }

  componentDidMount() {
    this.props.deleteNotification({channelName: this.props.params.channelName, userId: this.props.currentUser.id});
    this.props.receiveDeleteNoti(this.props.params.channelName);
    if (!this.props.params.channelName) {
      hashHistory.push(`/messages/general`);
    }
    this.pusher = new Pusher('c0b1744978ade9f1c5a4', {
      encrypted: true
    });

    var channel = this.pusher.subscribe('chat1');
    channel.bind('online_status', data => {
      this.props.fetchOnlineChannels();
    });
  }


  // this.props.goOffline(this.props.currentUser.username);

  // window.addEventListener("beforeunload", function(e){
  //  // Do something
  // }, false);
  // channelSelector (e) {
  //   this.setState({
  //     currentChannel: this.props.channels[e.currentTarget.value]
  //   });
  //   this.props.changeChannel(this.props.channels[e.currentTarget.value].title);
  // }

  handleUnsubscribe(e) {
    this.props.unsubscribeToChannel(e.currentTarget.value);
    if (this.props.currentChannel === this.props.allChannels[e.currentTarget.value].title) {
      hashHistory.push(`/messages/general`);
    }
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
    let onlineTagClass;
    let channelsHtml = channelsName.map( channelName => {
      // console.log(Object.keys(this.props.notification));
      // console.log(Object.keys(this.props.notification).indexOf(channelName[0]));
      if (Object.keys(this.props.onlineChannels).indexOf(channelName[0]) >= 0) {
        onlineTagClass = "online-icon";
      } else {
        onlineTagClass = "nothing";
      }
      if ( channelName[0] === this.props.currentChannel) {
        return (<li className="current-channel"  key={channelName[1]} >
                  <Link onClick={this.deleteNoti} to={"messages/" + this.props.currentChannel}><span className={onlineTagClass} >✒</span> {channelName[0].slice(0, 16)}</Link>
                  <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                </li>);
      } else {
        if ((Object.keys(this.props.notification).length) && (Object.keys(this.props.notification).indexOf(channelName[0]) >= 0)) {
          let num_noti;
          if (this.props.notification[channelName[0]] > 9) {
            num_noti = "?";
          } else {
            num_noti = this.props.notification[channelName[0]];
          }
          return (<li className="noti-channel"  key={channelName[1]}>
                    <Link onClick={this.deleteNoti} to={"messages/" + channelName[0]}><span className={onlineTagClass} >✒</span> {channelName[0].slice(0, 16)}</Link>
                    <button value={channelName[1]}>{num_noti}</button>
                  </li>);
        } else {
          return (<li className="channel"  key={channelName[1]}>
                    <Link onClick={this.deleteNoti} to={"messages/" + channelName[0]}><span className={onlineTagClass} >✒</span> {channelName[0].slice(0, 16)}</Link>
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
    let onlineTagClass;
    let channelsHtml = channelsName.map( channelName => {
      if (Object.keys(this.props.onlineChannels).indexOf(channelName[0]) >= 0) {
        onlineTagClass = "online-icon";
      } else {
        onlineTagClass = "nothing";
      }
      if ( channelName[0] === this.props.currentChannel) {
        return (<li className="current-channel"  key={channelName[1]} >
                <Link onClick={this.deleteNoti} to={"messages/" + this.props.currentChannel}><span className={onlineTagClass} >✒</span> {channelName[0].slice(0, 16)}</Link>
                  <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                </li>);
      } else {
        if ((Object.keys(this.props.notification).length) && (Object.keys(this.props.notification).indexOf(channelName[0]) >= 0)) {
          let num_noti;
          if (this.props.notification[channelName[0]] > 9) {
            num_noti = "?";
          } else {
            num_noti = this.props.notification[channelName[0]];
          }
          return (<li className="noti-dm-channel"  key={channelName[1]}>
                    <Link onClick={this.deleteNoti} to={"messages/" + channelName[0]}><span className={onlineTagClass} >✒</span> {channelName[0].slice(0, 16)}</Link>
                    <button value={channelName[1]}>{num_noti}</button>
                  </li>);
        } else {
          return (<li className="channel dm-channel"  key={channelName[1]}>
                    <Link onClick={this.deleteNoti} to={"messages/" + channelName[0]}><span className={onlineTagClass} >✒</span> {channelName[0].slice(0, 16)}</Link>
                    <button onClick={this.handleUnsubscribe} value={channelName[1]}>ⓧ</button>
                  </li>);
        }
      }
  });
    return channelsHtml;
  }

  currentUser() {
    if (this.props.currentUser.username) {
      return this.props.currentUser.username
    }
  }


  render () {
    return (
      <div className="channel-sidebar group">
        <div className="channels-container">
          <div className="channel-header">
            <h3 className="snap" ><span>✑</span><Link to="/"> Snap</Link></h3>
            <h3 className="current-user"><span>✒ </span>{this.currentUser()}</h3>
          </div>
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
