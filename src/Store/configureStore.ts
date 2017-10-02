import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, compose, createStore, GenericStoreEnhancer, Store } from 'redux';
import rootReducer from "../Features/reducers";

import { History } from 'history';
import { ApplicationState } from '../Features/App/AppRedux';

// Sagas
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

import rootSaga from "../Sagas/";

export default function configureStore(history: History, initialState?: ApplicationState) {
    // Build middleware. These are functions that can process the actions before they reach the store.
    const windowIfDefined = typeof window === 'undefined' ? null : window as any;
    // If devTools is installed, connect to it
    const devToolsExtension = windowIfDefined && windowIfDefined.devToolsExtension as () => GenericStoreEnhancer;

    const createStoreWithMiddleware = compose(
        applyMiddleware(sagaMiddleware, routerMiddleware(history)),
        devToolsExtension ? devToolsExtension() : (f : any) => f
    )(createStore);

    // Combine all reducers and instantiate the app-wide store instance
    const store = createStoreWithMiddleware(rootReducer, initialState) as Store<ApplicationState>;

    sagaMiddleware.run(rootSaga);

    // Enable Webpack hot module replacement for reducers
    if (module.hot) {
        module.hot.accept('../Features/reducers', () => {
            // const nextRootReducer = require<typeof ApplicationState>('../features/App');
            // store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
