import React from 'react';
import MessageModel from '../models/MessageModel';
import BottomBar from '../components/bottom-bar';

class MessageInput extends React.Component {
  constructor() {
    super();

    this.model = new MessageModel();

    this.style = {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: 50
    };
  }

  sendMessage(event) {
    event.preventDefault();

    let message = this.refs.newMessage.value;
    console.log("Message: ", message);
    console.log("Username: ", this.props.username);

    this.model.addResource({
      text: message,
      username: this.props.username
    });
  }

  render() {
    return (
      <BottomBar style={ this.style }>
        <form onSubmit={ this.sendMessage.bind(this) }>
          <input type="submit" value="Send" style={{ float: "right" }} />
          <textarea
            ref="newMessage"
            placeholder="Type here..."
            style={{ display: "block", width: "90%"}}>
          </textarea>
        </form>
      </BottomBar>
    );
  }
}

export default MessageInput;
