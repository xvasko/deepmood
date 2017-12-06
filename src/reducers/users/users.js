import { combineReducers } from 'redux';
import { byId } from './byId'
import { allIds } from './allIds'

export const users = combineReducers({
    allIds,
    byId
});
