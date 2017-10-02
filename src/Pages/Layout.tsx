import * as React from 'react';

const logo = require('../logo.png');

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fais-toi des muscles!</h2>
        </div>
        <div className="App-intro">
        { this.props.children }
        </div> 
      </div>;
    }
}