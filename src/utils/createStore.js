import { applyMiddleware, createStore as createReduxStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { appReducer } from '../reducers/appReducer';

export const createStore = () => {
    return createReduxStore(appReducer, {}, applyMiddleware(thunk, createLogger()))
}