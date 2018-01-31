import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers'
import { fetchUserAvatar } from './fetchUserAvatar'
import { updateProfileDetails } from './updateProfileDetails'
import { updateAvatarIdAction } from './actionCreators'

export const uploadUserAvatar = (file) =>
    (dispatch, getState) => {
        if(!file){
            throw new Error('Avatar type is not supported or the system could not load the file.');
        }

        let formData = new FormData();
        formData.append('Files', file);

        return axios.post('https://pv247messaging.azurewebsites.net/api/file',
            formData,
            getAuthorizedHeader(getState().authentication.token.data))
            .then(response => {
                    dispatch(updateAvatarIdAction(response.data[0]))

                    let profileDetails = getState().profile.profileDetails;

                    dispatch(updateProfileDetails(profileDetails.email, profileDetails))
                    dispatch(fetchUserAvatar(profileDetails.avatarId))
                })

    }