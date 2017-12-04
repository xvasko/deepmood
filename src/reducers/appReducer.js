import { combineReducers } from 'redux';
import { authentication } from './authentication/authentication';
import { channels } from './channels/channels'
import { messages } from './messages/messages'
import { profile } from './profile/profile'

export const appReducer = combineReducers({
    authentication,
    profile,
    channels,
    messages
});