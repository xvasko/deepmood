import { combineReducers } from 'redux';
import { allChannelIds } from './allChannelIds'
import { byChannelId } from './byChannelId'

export const messages = combineReducers({
    allChannelIds,
    byChannelId,
});
