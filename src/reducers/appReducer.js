import { combineReducers } from 'redux';
import { authentication } from './authentication/authentication';
import { channels } from './channels/channels'
import { messages } from './messages/messages'

export const appReducer = combineReducers({
    authentication,
    channels,
    messages
});