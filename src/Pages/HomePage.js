import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '@blueprintjs/core'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'

class LoginPage extends React.Component {
  
    static isPrivate = false
    
    onLoginClick = () => {
    }

    render() {
        return (
        <div className="login">
            It's too calm here
        </div>
        );
    }
}

LoginPage.propTypes = {
};

export default LoginPage;