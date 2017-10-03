import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ProgramView from '../Features/ShowProgram/Components/ProgramView'

export default class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className="home-header">

            </div>
            <h1 className="page--title">
                Home
            </h1>
            <div className="page--content">
                <ProgramView programExists={false}/>
            </div>
        </div>;
    }
}
