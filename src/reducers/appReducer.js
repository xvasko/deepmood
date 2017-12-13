import { combineReducers } from 'redux';
import { authentication } from './authentication/authentication';
import { channels } from './channels/channels'
import { messages } from './messages/messages'
import { profile } from './profile/profile'
import { users } from './users/users'
import { shared } from './shared/shared'

export const appReducer = combineReducers({
    authentication,
    profile,
    channels,
    messages,
    users,
    shared
});