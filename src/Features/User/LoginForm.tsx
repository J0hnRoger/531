import * as React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {actionCreators} from './UserRedux'
import RootState from '../../Store/index';

export interface LoginFormProps {
    login(login: string, password: string): any,
    currentWorker?: Worker,
}

interface State {
    login: string;
    password: string;
}

class LoginForm extends React.Component<LoginFormProps, State> {
    constructor(props: LoginFormProps) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
        this.login = this.login.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    login = () => {
        this.props.login(this.state.login, this.state.password)
    }

    handleInput = (event: any) => {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState({
            [name]: value
        });
    }

  render() {
    return (
        <div className="ui form">
                <div className="field">
                <label>LoginForm</label>
                <input type="text" name="login" value={this.state.login} placeholder="First Name" onChange={this.handleInput} />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="password" value={this.state.password} placeholder="Mot de passe" onChange={this.handleInput} />
            </div>
            <button className="ui button" type="submit" onClick={this.login} >Log Me!</button>

            {this.props.currentWorker !== undefined && <Redirect to={'/home'} />}
            </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currentWorker: state.users.currentWorker,
  };
}

const mapDispatchToProps = {
    login: actionCreators.login
}

export default connect<any, any>(mapStateToProps, mapDispatchToProps)(LoginForm);

