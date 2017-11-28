import { combineReducers } from 'redux';
import { isAuthenticating } from './isAuthenticating';

export const shared = combineReducers({
    isAuthenticating,
});