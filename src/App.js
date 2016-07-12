import React from 'react';
import Utils from './lib/Utils';
import Header from './containers/header';
import Channel from './containers/channel';
import MessageInput from './containers/message-input';
import SetUsername from './containers/set-username';

class App extends React.Component {
  constructor() {
    super();

    this.utils = new Utils();
    let currentUser = this.utils.store("chat.currentUser");

    if (currentUser.length === 0) { currentUser = "guest"; }
    console.log(currentUser);

    this.state = {
      messages: [],
      currentUser: currentUser
    };
  }

  setUsername(newUsername) {
    this.utils.store("chat.currentUser", newUsername);

    this.setState({
      currentUser: newUsername
    });
  }

  render() {
    return (
      <div style={{ paddingTop: 100, paddingBottom: 60 }}>
        <Header appName="SLAKO" />
        <SetUsername
          username={ this.state.currentUser }
          onChange={ this.setUsername.bind(this) } />

        <Channel messages={ this.state.messages } />
        <MessageInput username={ this.state.currentUser } />
      </div>
    );
  }
}

export default App;
