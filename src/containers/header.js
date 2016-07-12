import React from 'react';
import AppBar from '../components/app-bar';
import ColorSet from '../styles/ColorSet';

class Header extends React.Component {
  render() {
    return (
      <AppBar title={ this.props.appName }
        style={{ backgroundColor: ColorSet.secondary }}
        headerStyle={{ color: ColorSet.primary }} />
    );
  }
}

export default Header;
