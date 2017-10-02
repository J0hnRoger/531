import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import CalculateMyRM from '../Features/BuildProgram/CalculateMyRM/CalculateMyRM';

export default class Login extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1 className="page--title">
                Program Builder
            </h1>
            <div className="page--content">
                <CalculateMyRM /> 
            </div>
        </div>;
    }
}
