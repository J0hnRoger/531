import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from './Components/AuthRoute';
import logo from '../public/workout.jpg';
import Root from './Components/Root'
import Login from './Pages/LoginPage'
import Home from './Pages/HomePage'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'

class App extends Component {
  render() {
    return (
      <Root>
          <Router>
             <div>
              <Route exact={true} path="/" component={Login} />
              <Route path="/Home" component={Home} />
             </div>
          </Router>
      </Root>
    );
  }
}

export default App;
