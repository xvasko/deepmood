import { combineReducers } from 'redux';
import { authentication } from './authentication/authentication';
import { channels } from './channels/channels'

export const appReducer = combineReducers({
    authentication,
    channels
});