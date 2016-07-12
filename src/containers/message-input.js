import React from 'react';
import MessageModel from '../models/MessageModel';
import BottomBar from '../components/bottom-bar';
import ColorSet from '../styles/ColorSet';

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

    this.buttonStyle = {
      float: "right",
      backgroundColor: ColorSet.primary,
      color: "#fff",
      padding: "5px 10px",
      display: "inline-block",
      border: "1px solid #999",
      borderRadius: "5px"
    };

    this.inputStyle = {
      display: "block",
      width: "90%",
      border: "1px solid #999",
      borderRadius: "5px"
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
          <input type="submit" value="Send" style={ this.buttonStyle } />
          <textarea
            ref="newMessage"
            placeholder="Type here..."
            style={ this.inputStyle }>
          </textarea>
        </form>
      </BottomBar>
    );
  }
}

export default MessageInput;
