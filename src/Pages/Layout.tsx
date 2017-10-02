import * as React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../logo.png');

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div className="App ui-grid">
        <div className="App-header">
          <div className="row">
            <Link to={ '/program-builder' }>
            <div className="header--login" >
                <img className="ui mini circular image" src="https://semantic-ui.com/images/avatar2/small/molly.png" />
                <div className="content">
                    <div className="ui sub header">Elyse</div>
                    No Rank
                </div>
            </div>
            </Link>
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