import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers'
import { fetchUserAvatar } from './fetchUserAvatar'
import { updateProfileDetails } from './updateProfileDetails'

export const uploadUserAvatar = (file) =>
    (dispatch, getState) => {
        if(!file){
            throw new Error('Avatar type is not supported or the system could not load the file.');
        }

        var formData = new FormData();
        formData.append('Files', file);

        axios.post('https://pv247messaging.azurewebsites.net/api/file',
            formData,
            getAuthorizedHeader(getState().authentication.token.data))
            .then(response => {
                    dispatch({type: 'PROFILE_UPDATE_AVATAR_ID', payload: response.data[0]})

                    var profileDetails = getState().profile.profileDetails;

                    console.log(getState().profile.profileDetails)

                    dispatch(updateProfileDetails(profileDetails.email, profileDetails))
                    dispatch(fetchUserAvatar(profileDetails.avatarId))
                })

    }