import React from 'react';
import _ from 'lodash';
import ColorSet from '../styles/ColorSet';
import Fonts from '../styles/Fonts';

class SetUsername extends React.Component {
  constructor(props) {
    super(props);

    this.baseStyle = _.merge({
      backgroundColor: ColorSet.primary,
      color: ColorSet.lightGrey,
      fontFamily: Fonts.sansSerif,
      position: "fixed",
      top: 100,
      left: 0,
      right: 0,
      margin: 0,
      padding: "5px 10px",
      boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
    }, props.style || {});
  }

  onSubmit(event) {
    event.preventDefault();

    let newUser = this.refs.newUsername.value;
    console.log("Registering as: ", newUser);

    this.props.onChange(newUser);
  }

  renderUserForm() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref="newUsername" type="text" placeholder="What's your name?" />
        <input type="submit" value="Register" />
      </form>
    );
  }

  resetUser(event) {
    event.preventDefault();
    this.props.onChange("guest");
  }

  renderGreeting() {
    return (
      <div style={ this.baseStyle }>
        <p>
          Hi, { this.props.username }!
          (<a href="#" onClick={ this.resetUser.bind(this) }>not you?</a>)
        </p>
      </div>
    );
  }

  render() {
    if (this.props.username == "guest") {
      return this.renderUserForm();
    } else {
      return this.renderGreeting();
    }
  }
}

export default SetUsername;
