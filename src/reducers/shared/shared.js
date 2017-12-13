import { combineReducers } from 'redux';
import { errors } from './errors'

export const shared = combineReducers({
    errors,
});
