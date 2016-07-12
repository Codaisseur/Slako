import React from 'react';

class MessageInput extends React.Component {
  sendMessage() {
    console.log("Send all the messages!");
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.sendMessage.bind(this) }>
          <textarea ref="newMessage" placeholder="Type here..."></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default MessageInput;
