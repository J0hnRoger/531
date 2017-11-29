import * as React from 'react';
import { Link } from 'react-router-dom';

import Worker from '../../Entities/Worker';

export interface LoginProps {
    worker?: Worker
}

class Login extends React.Component<LoginProps, any> {
  render() {
    return (
        <div>
            {this.props.worker == undefined && 
                <div className="header--login" >
                    <Link to={'/'}>Connectes-toi!</Link>
                </div>}
            <div className="header--login" >
                <img className="ui mini circular image" src="https://semantic-ui.com/images/avatar2/small/molly.png" />
                <div className="content">
                    <div className="ui sub header">{this.props.worker && this.props.worker.Login}</div>
                    No Rank
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
