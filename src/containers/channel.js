import React from 'react';
import Message from './message';
import MessageModel from '../models/MessageModel';

class Channel extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };

    this.model = new MessageModel();
    this.model.subscribe(this.updateMessages.bind(this));
  }

  updateMessages() {
    this.setState({
      messages: this.model.resources
    });
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message) => {
          return <Message key={ message._id } { ...message } />;
        })}
      </div>
    );
  }
}

export default Channel;
