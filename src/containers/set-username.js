import React from 'react';

class SetUsername extends React.Component {
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
      <div>
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
