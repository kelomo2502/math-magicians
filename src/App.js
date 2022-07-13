import React from 'react';
// eslint-disable-next-line import/extensions
import Calculator from './components/Calculator.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<Calculator />);
  }
}

export default App;
