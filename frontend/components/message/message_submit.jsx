import React from 'react';

class MessageSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const body = this.state;
    this.props.createMessage({message: {
      author_id: this.props.currentUser.id,
      channelName: this.props.channel,
      body: body.body
    }});
    this.setState({body: ""});
  }

  handleChange(e) {
    this.setState({
      body: e.currentTarget.value
    });
  }

  render() {
    return (
      <form className="message-form-container" onSubmit={this.handleSubmit}>
        <input
          className="message-input"
          type="text"
          onChange={this.handleChange}
          value={this.state.body}
          placeholder={"Enter Message"} />
        <input type="submit" className="chat-submit" />
      </form>
    );
  }
}

export default MessageSubmit;
