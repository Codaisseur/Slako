import React from 'react';
import Message from './message';

class Channel extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message) => {
          return <Message { ...message } />;
        })}
      </div>
    );
  }
}

export default Channel;
