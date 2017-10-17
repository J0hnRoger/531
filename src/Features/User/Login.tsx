import * as React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import Worker from '../../Entities/Worker';

export interface LoginProps {
    currentWorker: Worker
}

class Login extends React.Component<LoginProps, any> {
  render() {
    return (
        <div>
            {this.props.currentWorker == undefined && 
                <div className="header--login" >
                    <Link to={'/'}>Connectes-toi!</Link>
                </div>}
            <Link to={ '/program-builder' }>
                <div className="header--login" >
                    <img className="ui mini circular image" src="https://semantic-ui.com/images/avatar2/small/molly.png" />
                    <div className="content">
                        <div className="ui sub header">{this.props.currentWorker && this.props.currentWorker.login}</div>
                        No Rank
                    </div>
                </div>
            </Link>
        </div>
    );
  }
}

const mapState2Props = (state: any) => {
    return {
      currentWorker: state.user.currentWorker
    };
  }

export default connect(mapState2Props)(Login)
