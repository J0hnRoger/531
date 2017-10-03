import React from 'react';
import PropTypes from 'prop-types';
import {Input} from '@blueprintjs/core'
import {Link} from 'react-router-dom'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'

class HomePage extends React.Component {
  
    static isPrivate = false
    
    onLoginClick = () => {
    }

    render() {
        return (
        <div className="home">
            It's too calm here
            <Link className="pt-button pt-intent-primary" to="/build"  >
                Give me my program!
            </Link>
        </div>
        );
    }
}

HomePage.propTypes = {
};

export default HomePage;