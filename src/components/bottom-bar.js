import React from 'react';
import _ from 'lodash';
import ColorSet from '../styles/ColorSet';
import Fonts from '../styles/Fonts';

class BottomBar extends React.Component {
  constructor(props) {
    super(props);

    this.baseStyle = _.merge({
      backgroundColor: ColorSet.tertiary,
      color: ColorSet.lightGrey,
      fontFamily: Fonts.sansSerif,
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      margin: 0,
      padding: "5px 10px",
      boxShadow: "1px -1px 5px rgba(0,0,0,0.3)",
    }, props.style || {});
  }

  render() {
    return (
      <div style={ this.baseStyle }>
        { this.props.children }
      </div>
    );
  }
}

export default BottomBar;
