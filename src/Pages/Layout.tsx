import * as React from 'react';
import { Link } from 'react-router-dom';

import Login from '../Features/Login/Login';

const logo = require('../logo.png');

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className="App ui-grid">
        <div className="App-header">
          <div className="row">
            <Login />
          </div>
          <div className="row">
            <Link to={ '/home' }>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Fais-toi des muscles!</h2>
            </Link>
        </div>
        </div>
        <div className="App-intro">
        { this.props.children }
        </div> 
      </div>;
    }
}