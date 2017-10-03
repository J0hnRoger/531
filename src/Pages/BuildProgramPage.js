import React from 'react';
import PropTypes from 'prop-types';
import {Input, ProgressBar, Intent } from '@blueprintjs/core'
import {Link} from 'react-router-dom'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'
import '../styles/build-program.css'

class BuildPage extends React.Component {
  
    static isPrivate = false

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    onGenerateClick = () => {
        this.setState( {
            isOpen: true            
        })
    }

    render() {
        return (
        <div className="program-builder">
            <div className="program-builder__section program-builder__intro">
                First, give me your max to these 4 lift, please    
            </div> 
            <div className="program-builder__section program-builder__content">
                <div className="program-builder__exercice">
                    <div className="program-builder__title">Squat</div>
                    <div className="builder__input">
                        <input className="pt-input" type="text" placeholder="What's your 1RM ?" dir="auto" />
                    </div>
                </div>
                <div className="program-builder__exercice">
                    <div className="program-builder__title">Dead lift</div>
                        <div className="builder__input">
                            <input className="pt-input" type="text" placeholder="What's your 1RM ?" dir="auto" />
                        </div>
                    </div>
                <div className="program-builder__exercice">
                    <div className="program-builder__title">Military Press</div>
                    <div className="builder__input">
                        <input className="pt-input" type="text" placeholder="What's your 1RM ?" dir="auto" />
                    </div>
                </div>
                <div className="program-builder__exercice">
                    <div className="program-builder__title">Bench Press</div>
                    <div className="builder__input">
                        <input className="pt-input" type="text" placeholder="What's your 1RM ?" dir="auto" />
                    </div>
                </div>
            </div>
            <div className="program-builder__section program-builder__footer">
                <button type="button" className="pt-button pt-intent-success" onClick={this.onGenerateClick}>
                    Generate the program
                    <span className="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
                </button>
            </div>
                <div className="program-builder__section">
                    { this.state.isOpen && 
                <ProgressBar intent={Intent.SUCCESS} value={0.6} /> }
                </div>
            
        </div>
        );
    }
}

BuildPage.propTypes = {
};

export default BuildPage;