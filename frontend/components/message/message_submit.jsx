import React from 'react';
// import * as Artyom from 'artyom.js';
// let artyom = Artyom.ArtyomBuilder.getInstance();


class MessageSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.voiceCommand = this.voiceCommand.bind(this);
    this.terminateVoice = this.terminateVoice.bind(this);
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

  voiceCommand() {
    console.log("first");

    // artyom.redirectRecognizedTextOutput((recognized,isFinal) => {
    // if(isFinal){
    //     // Nothing
    //     console.log("hello");
    // }else{
    //     console.log(recognized);
    // }
  // });

    // artyom.on(['Repeat after me *'] , true).then((i,wildcard) => {
    //   console.log("testing");
    //   artyom.say("You've said : " + wildcard);
    // });

    artyom.addCommands([
      {
          indexes: ['What is your name','Testing','Anyone'],
          action: (i) => {
            console.log("questions");
            artyom.say("testing testing");
          }
      },
      {
          indexes: ['Repeat after me *'],
          smart:true,
          action: (i,wildcard) => {
            console.log("wildcard");
            // artyom.say("repeat "+ wildcard);
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
      continuous:false,
      // Log everything in the console
      debug:true,
      // Initialize artyom !
      listen:true
    });
  }

  terminateVoice() {
    console.log("off");
    artyom.fatality();
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
        <div onClick={this.voiceCommand}             className="voice-command-toggle-on">O</div>
        <div onClick={this.terminateVoice}             className="voice-command-toggle-off">X</div>
      </form>
    );
  }
}

export default MessageSubmit;
