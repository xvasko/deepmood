import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import { createLogger } from 'redux-logger';
import {
    connectRouter,
    routerMiddleware
} from 'connected-react-router';
import thunk from 'redux-thunk';
import { appReducer } from '../reducers/appReducer';
import { getInitialState } from './getInitialState'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createStore = (history) => {
    return createReduxStore(
        connectRouter(history)(appReducer),
        getInitialState(),
        composeEnhancers(applyMiddleware(routerMiddleware(history), thunk, createLogger()))
    );
}