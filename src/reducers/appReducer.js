import { combineReducers } from 'redux';
import { authentication } from './authentication/authentication';
import { channels } from './channels/channels'
import { shared } from './shared/shared'

export const appReducer = combineReducers({
    authentication,
    channels,
    shared
});