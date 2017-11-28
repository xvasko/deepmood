import { combineReducers } from 'redux';
import { allIds } from './allIds';
import { byId } from './byId';
import { isFetchingChannels } from './isFetchingChannels'

export const channels = combineReducers({
    allIds,
    byId,
    isFetchingChannels
});
