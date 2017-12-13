import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers'
import { fetchUserAvatarAction } from './actionCreators'

export const fetchUserAvatar = (avatarId) =>
    (dispatch, getState) => {
        if (avatarId) {
            axios.get(`https://pv247messaging.azurewebsites.net/api/file/${avatarId}/download-link`,
                getAuthorizedHeader(getState().authentication.token.data))
                .then(response => dispatch(fetchUserAvatarAction(response.data)))
        }
    }