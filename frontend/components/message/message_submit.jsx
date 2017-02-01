import React from 'react';
import { hashHistory } from 'react-router';




class MessageSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      voice: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.voiceCommand = this.voiceCommand.bind(this);
  }

  handleSubmit(e) {
    !e || e.preventDefault();
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

  voiceCommand() {
    if (this.state.voice) {
      artyom.fatality();
      this.setState({voice: false});
      let voiceIcon = document.getElementsByClassName("voice-icon")[0];
      voiceIcon.style.opacity = ".5";
    } else {
      this.setState({voice: true});
      let voiceIcon = document.getElementsByClassName("voice-icon")[0];
      voiceIcon.style.opacity = "1";

      var matchChannelName = (string) => {
        let subscribeChannels = this.props.subscribeChannels;
        for (var id in subscribeChannels) {
          if (subscribeChannels[id].title.toLowerCase().split(" ").join("") === string.toLowerCase().split(" ").join("")) {
            return subscribeChannels[id].title;
          }
        }
      };

      artyom.addCommands([
        {
            indexes: ['Repeat after me *'],
            smart:true,
            action: (i,wildcard) => {
              artyom.say("repeat "+ wildcard);
            }
        },
        {
            indexes: ['Message *'],
            smart:true,
            action: (i,wildcard) => {
              artyom.say("you said "+ wildcard);
              this.setState({body: this.state.body+ " " + wildcard});
            }
        },
        {
            indexes: ['Send'],
            smart:false,
            action: (i,wildcard) => {
              this.handleSubmit();
            }
        },
        {
            indexes: ['delete message'],
            smart:false,
            action: (i,wildcard) => {
              this.setState({body: ""});
            }
        },
        {
            indexes: ['change channel to *'],
            smart:true,
            action: (i,wildcard) => {
              let channel = matchChannelName(wildcard);
              if (channel) {
                hashHistory.push('/messages/' + channel);
              }
            }
        }
      ]);
      artyom.on(['Good morning','Good afternoon']).then(function(i){
        switch (i) {
            case 0:
                // artyom.say("Good morning, how are you?");
                console.log("Good morning, how are you?");
            break;
            case 1:
                // artyom.say("Good afternoon, how are you?");
                console.log("Good afternoon, how are you?");
            break;
        }
      });

      artyom.initialize({
        executionKeyword:"and do it now",
        lang:"en-US",
        // Process 1 command, if nothing recognized then it will stop
        continuous:true,
        // Log everything in the console
        debug:true,
        // Initialize artyom !
        listen:true
      });
    }
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
        <div className="voice-icon" onClick={this.voiceCommand} ><img src={window.snapAssets.voice}/></div>
      </form>
    );
  }
}

export default MessageSubmit;
