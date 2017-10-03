import * as React from 'react';

import NoProgramYet from './NoProgramYet'
import ShowProgram from './ShowProgram'

export interface ProgramViewProps {
    programExists: boolean
}

export default class ProgramView extends React.Component<ProgramViewProps, any> {
  render() {
    return (
      <div>
        { !this.props.programExists && <NoProgramYet /> }
        { this.props.programExists && <ShowProgram /> }
      </div>
    );
  }
}
