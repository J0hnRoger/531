import * as React from 'react';
import './App.css';
import CalculateMyRM from './Features/BuildProgram/CalculateMyRM/CalculateMyRM';

const logo = require('./logo.png');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fais-toi des muscle!</h2>
        </div>
        <div className="App-intro">
          <CalculateMyRM />
        </div>
      </div>
    );
  }
}

export default App;
