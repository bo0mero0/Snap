/* globals Pusher */
import React from 'react';
import ReactDOM from 'react-dom';
import MessageSubmit from './message_submit';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.renderMessages = this.renderMessages.bind(this);
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
    });
  }

  componentDidUpdate(){
    const end = document.getElementById('messages-scroll-location');
    if (end) {
      end.scrollIntoView();
    }
  }

  componentWillUnmount() {
    this.pusher.unsubcribe('chat1');
  }

  renderMessages() {
    let messages = [];
    for (var id in this.props.messages) {
        messages.push(this.props.messages[id]);
    }
    let messagesHtml = messages.map( message => {
      return (
        <li className="message-container" key={message.id}>
          <div className="message-icon">{message.icon_url}</div>
          <div className="author-time-message-container">
            <div className="author-time-container">
              <div className="message-author">{message.author_name}</div>
              <div className="message-time">{message.created_at}</div>
            </div>
            <div className="message" key={message.id} value={message.id}>{message.body}</div>
          </div>
        </li>
      );
    });
    return messagesHtml;
  }

  render() {
    return (
      <div className="messages-container group">
        <ul className="messages">
          {this.renderMessages()}
          <div id="messages-scroll-location"></div>
        </ul>
        <MessageSubmit channel={this.props.currentChannel}
                       createMessage={this.props.createMessage}
                       currentUser={this.props.currentUser}/>
      </div>
    );
  }

}

export default Message;
