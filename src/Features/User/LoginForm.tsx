import * as React from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import {actionCreators} from './UserRedux'

export interface LoginFormProps {
    login(login: string, password: string): any,
    currentWorker: Worker,
}

class LoginForm extends React.Component<LoginFormProps, any> {
    state = {
        login: "",
        password: ""
    }

    constructor(props: any) {
        super(props);
    }

    login = () => {
        this.props.login(this.state.login, this.state.password)
    }

    handleInput = (event: any) => {
        let formState = this.state
        const target = event.target
        const name = target.name
        formState[name] = target.value
        this.setState({
            formState
        })
    }
  render() {

    return (
        <div className="ui form">
            <div className="field">
                <label>LoginForm</label>
                <input type="text" name="login" placeholder="First Name" />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="password" placeholder="Mot de passe" />
            </div>
            <button className="ui button" type="submit" onClick={this.login} >Log Me!</button>

            {this.props.currentWorker !== undefined && <Redirect to={'/home'} />}
            </div>
    );
  }
}

const mapState2Props = (state: any) => {
  return {
    currentWorker: state.user.currentWorker
  };
}

export default connect(mapState2Props, {
    login: actionCreators.login
})(LoginForm);
