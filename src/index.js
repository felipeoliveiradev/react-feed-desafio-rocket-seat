import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import './sass/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <h1>teste</h1>
        <h2>teste</h2>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
