import MessageBar from './MessageBar'
import { connect } from 'react-redux';
import {ApplicationState} from '../../Store'

const mapStateToProps = ({ app }: { app: ApplicationState } ) => {
    return { 
        message: app.error,
        visible: true,
    }
}

export default connect(mapStateToProps, null)(MessageBar);