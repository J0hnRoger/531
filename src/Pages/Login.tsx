import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoginForm from "../Features/User/LoginForm"
import MessageBar from "../Features/App/ConnectedMessageBar"

export default class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="page--title">
                Login
            </h1>
            <MessageBar /> 
            <div className="page--content">
                <LoginForm />
            </div>
        </div>;
    }
}
