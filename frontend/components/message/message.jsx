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
    var channel = this.pusher.subscribe('chat1');
    channel.bind('message_created', data => {
      this.props.fetchMessages(this.props.currentChannel.id);
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
    let messagesbody = [];
    for (var id in this.props.messages) {
        messagesbody.push([this.props.messages[id].body, id]);
    }
    let messagesHtml = messagesbody.map( messagebody => {
      return (<li className="message" key={messagebody[1]} value={messagebody[1]}>{messagebody[0]}</li>);
    });
    return messagesHtml;
  }

  render() {
    return (
      <div className="message-container">
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
