import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LoginForm from "../Features/User/LoginForm"

export default class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="page--title">
                Login
            </h1>
            <div className="page--content">
                <LoginForm />
            </div>
        </div>;
    }
}
