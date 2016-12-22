/* globals Pusher */
import React from 'react';
import ReactDOM from 'react-dom';
import MessageSubmit from './message_submit';
import ChatHeader from '../chat_header/chat_header_container';

const mapCSS = {
  map: {
    height: "30px",
    position: "absolute"
  }
};

let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderMessages = this.renderMessages.bind(this);
    this.updateTab = this.updateTab.bind(this);
    this.notify = this.notify.bind(this);
    this.initMap = this.initMap.bind(this);
  }

  // shouldComponentUpdate() {
  //   this.setState({
  //     channel_id: this.props.currentChannel.id
  //   });
  //   return true;
  // }

  componentDidMount() {
    this.pusher = new Pusher('c0b1744978ade9f1c5a4', {
      encrypted: true
    });
    // this.state.channel_id.toString()
    // let currentChannel = this.props.currentChannel;
    // let fetchMessages = this.props.fetchMessages;
    var channel = this.pusher.subscribe('chat1');
    channel.bind('message_created', data => {
      this.props.fetchMessages(this.props.currentChannel);
      if (data.channel_name && data.channel_name !== this.props.currentChannel) {
        this.props.receiveNotification(data.channel_name);
      }
      if (!this.props.focus) {

        this.updateTab();
        this.notify(data.author, data.message);
      }
      if (this.props.currentUser.userName === "phi");
      this.props.fetchSubscribeChannels(this.props.currentUser.id);
      var audio = new Audio(window.snapAssets.ding);
      audio.play();
    });
    this.initMap();
  }

  initMap() {
    map = new google.maps.Map(document.getElementById('map'), _mapOptions);
  }

  notify(author, message) {
    author = author.replace(/\b\w/g, l => l.toUpperCase());
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    } else {
      var notification = new Notification(author, {
        icon: window.snapAssets.favicon_icon,
        body: message,
        sound: window.snapAssets.ding
      });

      notification.onclick = function () {
        window.open("http://ohsnap.herokuapp.com/#/messages");
      };
      setTimeout(function() { notification.close();}, 2000);
    }
  }

  updateTab() {
    document.title = '!Snap';
    document.getElementById('favicon').href = window.snapAssets.favicon_icon_noti;
  }

  componentDidUpdate(){
    const end = document.getElementById('messages-scroll-location');
    if (end) {
      end.scrollIntoView();
    }
  }

  // componentWillUnmount() {
  //   this.pusher.unsubcribe('chat1');
  // }

  renderMessages() {
    let messages = [];
    for (var id in this.props.messages) {
        messages.push(this.props.messages[id]);
    }
    let lastUser;
    let messagesHtml = messages.map( message => {
      if (lastUser !== message.author_name) {
        lastUser = message.author_name;
        let iconUrl;
        if (message.author_name === "phi") {
          iconUrl = window.snapAssets.phi;
        } else {
          iconUrl = window.snapAssets.profile;
        }
        return (
          <li className="message-container" key={message.id}>
            <div className="message-icon"><img src={iconUrl} alt="MDN"/></div>
            <div className="author-time-message-container">
              <div className="author-time-container">
                <div className="message-author">{message.author_name}</div>
                <div className="message-time">{message.created_at}</div>
              </div>
              <div className="message" key={message.id} value={message.id}>{message.body}</div>
            </div>
          </li>
        );
      } else {
        return (
        <li className="message-container" key={message.id}>
          <div className="author-time-message-container">
            <div className="message" key={message.id} value={message.id}>{message.body}</div>
          </div>
        </li>
      );
      }
    });
    return messagesHtml;
  }

  render() {
    return (
      <div className="messages-container group">
        <ChatHeader/>
        <ul className="messages">
          {this.renderMessages()}
          <div id="messages-scroll-location"></div>
        </ul>
        <MessageSubmit channel={this.props.currentChannel}
                       createMessage={this.props.createMessage}
                       currentUser={this.props.currentUser}/>
        <div id="map"></div>
      </div>
    );
  }

}

export default Message;
