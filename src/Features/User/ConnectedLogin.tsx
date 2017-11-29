import { connect } from 'react-redux';

import Login from './Login';
import RootState from '../../Store'
import Worker from '../../Entities/Worker';

interface PropsFromRedux {
    worker?: Worker;
}
const mapStateToProps = ( state: RootState) => ({
  worker: state.users.currentWorker 
});

export const ConnectedLogin = connect<PropsFromRedux, null, {}>(mapStateToProps)(Login);