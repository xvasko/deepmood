import { createProfileChannels } from '../profile/updateProfileChannels'
import { fetchExistingUsers } from '../users/fetchExistingUsers'
import { fetchProfileDetails } from '../profile/fetchProfileDetails'

export const fetchAuthData = (email) =>
    (dispatch) => {
        dispatch(fetchProfileDetails(email));
        dispatch(fetchExistingUsers());
        dispatch(createProfileChannels(email))
    };