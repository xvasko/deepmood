import { combineReducers } from 'redux';
import { authentication } from './authentication/authentication';

export const appReducer = combineReducers({
    authentication,
});