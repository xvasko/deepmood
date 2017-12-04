import { combineReducers } from 'redux';
import { isProfileOpen } from './isProfileOpen'
import { profileDetails } from './profileDetails'

export const profile = combineReducers({
    isProfileOpen,
    profileDetails
});
