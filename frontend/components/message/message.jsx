import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      body: "",
      author_id: currentUser.id,
      channel_id: 1

    });
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  handleSubmit(e) {
    e.preventDefault();
    const message = this.state;
    this.props.createMessage({message});
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
      return (<li classbody="message" key={messagebody[1]} value={messagebody[1]}>{messagebody[0]}</li>);
    });
    return messagesHtml;
  }

  render() {

    return (
      <div>
        <ul>
          {this.renderMessages()}
        </ul>

        <form onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange}
                  placeholder="enter message"
                  rows="10"
                  cols="50">

        </textarea>
        <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }

}

export default Message;
