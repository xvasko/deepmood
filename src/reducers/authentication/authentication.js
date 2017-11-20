import { combineReducers } from 'redux';
import { token } from './token';

export const authentication = combineReducers({
    token,
});