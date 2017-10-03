import React from 'react';
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Input} from '@blueprintjs/core'

class LoginPage extends React.Component {
    
    static isPrivate = false
    
    constructor() {
        super()
        this.state = {
            redirect: false
        }
    }

    onLoginClick = () => {
        this.setState({
            redirect: true
        })
    }

    render() {
        return (
        <div className="login">
            <input className="pt-input .modifier" type="text" placeholder="What's your name ?" dir="auto" />
            <input className="pt-input .modifier" type="text" placeholder="What's your login ?" dir="auto" />
                <button type="button" className="pt-button pt-intent-success" onClick={this.onLoginClick}>
                    Log Me
                    <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
                </button>
                {this.state.redirect && <Redirect to='/Home' /> }
            </div>
        );
    }
}

LoginPage.propTypes = {
};

export default LoginPage;