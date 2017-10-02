import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ConnectedRouter } from 'react-router-redux';
import { routes } from './Routes';
import { createBrowserHistory } from 'history';

import configureStore from "./Store/configureStore";

// Create browser history to use in the Redux store
const history = createBrowserHistory();
debugger
const store = configureStore(history);

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
          <ConnectedRouter history={history} children={ routes } />
      </Provider>
    );
  }
}

export default App; 
