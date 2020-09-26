import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // todo
  }

  render() {
    return (
      <button>OFF</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);