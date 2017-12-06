import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers'

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
            .then(response => dispatch({action: 'PROFILE_UPDATE_AVATAR_URI', payload: response.data[0]}))

    }