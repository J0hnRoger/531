import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className="home-header">

            </div>
            <h1 className="page--title">
                Home
            </h1>
            <div className="page--content">
                Hello World
            </div>
        </div>;
    }
}
