import { createProfileChannels } from '../profile/updateProfileChannels'
import { fetchProfileDetails } from '../profile/fetchProfileDetails'
import { fetchExistingUsers } from '../users/fetchExistingUsers'

export const fetchAuthData = (email) =>
    (dispatch) => {
        dispatch(fetchProfileDetails(email));
        dispatch(createProfileChannels(email));
        return dispatch(fetchExistingUsers());
    };