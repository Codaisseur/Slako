import React from 'react';
import TimeAgo from 'react-timeago';
import ColorSet from '../styles/ColorSet';
import Fonts from '../styles/Fonts';

class Message extends React.Component {
  constructor() {
    super();

    this.baseStyle = {
      width: '100%',
      borderBottom: "1px solid #eee",
      padding: 10
    };

    this.usernameStyle = {
      fontSize: Fonts.smallSize,
      color: ColorSet.darkGrey,
      fontWeight: 800
    };

    this.dateStyle = {
      fontSize: Fonts.smallSize,
      color: ColorSet.darkGrey,
      fontWeight: 300
    };
  }
  render() {
    return (
      <div style={ this.baseStyle }>
        <p style={ this.usernameStyle }>{ this.props.username }:</p>
        <p>{ this.props.text }</p>
        <p style={ this.dateStyle }><TimeAgo date={ this.props.createdAt } /></p>
      </div>
    );
  }
}

export default Message;
