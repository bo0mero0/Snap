/* globals Pusher */
import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      author_id: this.props.currentUser.id,
      channel_id: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
    this.pusher = new Pusher('c0b1744978ade9f1c5a4', {
      encrypted: true
    });
    var channel = this.pusher.subscribe('chat' + this.state.channel_id.toString());
    channel.bind('message_created', data => {
      this.props.fetchMessages();
    });
  }

  componentDidUpdate(){
    const end = document.getElementById('messages-scroll-location');
    if (end) {
      end.scrollIntoView();
    }
  }

  componentWillUnmount() {
    this.pusher.unsubcribe('chat' + this.state.channel_id.toString());
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state;
    this.props.createMessage({message});
    this.setState({ body: "" });

  }

  handleChange(e) {
    this.setState({
      body: e.currentTarget.value
    });
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
        <form onSubmit={this.handleSubmit}>
        <input type="text"
              className="message-input"
              onChange={this.handleChange}
              placeholder="enter message"
              value={this.state.body}>
        </input>
        <input type="submit" className="chat-submit" value="submit"/>
        </form>
      </div>
    );
  }

}

export default Message;
