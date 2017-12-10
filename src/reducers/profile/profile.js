import { combineReducers } from 'redux';
import { isProfileOpen } from './isProfileOpen'
import { profileDetails } from './profileDetails'
import { avatarUri } from './avatarUri'
import { profileChannels } from './profileChannels'

export const profile = combineReducers({
    isProfileOpen,
    profileDetails,
    profileChannels,
    avatarUri,
});
