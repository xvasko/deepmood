import { combineReducers } from 'redux';
import { isProfileOpen } from './isProfileOpen'
import { profileDetails } from './profileDetails'
import { avatarUri } from './avatarUri'

export const profile = combineReducers({
    isProfileOpen,
    profileDetails,
    avatarUri
});
