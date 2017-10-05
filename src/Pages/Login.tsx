import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="page--title">
                Login
            </h1>
            <div className="page--content">
            <div className="ui form">
            <div className="field">
                <label>Login</label>
                <input type="text" name="first-name" placeholder="First Name" />
            </div>
            <div className="field">
                <label>Password</label>
                <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <button className="ui button" type="submit">Log Me!</button>
            </div>
            </div>
        </div>;
    }
}
