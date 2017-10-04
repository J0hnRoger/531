import * as React from 'react';
import { Link } from 'react-router-dom';

export interface LoginProps {
}

export default class Login extends React.Component<LoginProps, any> {
  render() {
    return (
        <Link to={ '/program-builder' }>
            <div className="header--login" >
                <img className="ui mini circular image" src="https://semantic-ui.com/images/avatar2/small/molly.png" />
                <div className="content">
                    <div className="ui sub header">Elyse</div>
                    No Rank
                </div>
            </div>
        </Link>
    );
  }
}
