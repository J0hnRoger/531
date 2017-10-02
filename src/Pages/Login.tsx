import * as React from 'react';
import { RouteComponentProps, NavLink } from 'react-router-dom';


export default class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="page--title">
                Login
            </h1>
            <div className="page--content">
            <NavLink exact to={'/home'} >Go!</NavLink>
            </div>
        </div>;
    }
}
