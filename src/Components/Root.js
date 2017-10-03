import React, { Component } from 'react';

class Root extends Component {
    render() {
        return (
            <div className="home">
                {this.props.children}
            </div>
        );
    }
}

export default Root;