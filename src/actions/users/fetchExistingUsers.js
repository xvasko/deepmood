import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers'


export const fetchExistingUsers = () =>
    (dispatch, getState) => {
        axios.get('https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user',
            getAuthorizedHeader(getState().authentication.token.data)
        )
        .then(result => {
            result.data.map(user => {
                if (user.email !== '') {
                    fetchAvatar(JSON.parse(user.customData).avatarId)
                    dispatch({type: 'USERS_CREATE_USER', payload: { user: user, avatarUri: 'lol' }})
                }
            })
        })
        .catch((error) =>
            console.log(error)
        );
    }


const fetchAvatar = (avatarId) =>
    (getState) => {
        if (avatarId) {
            axios.get(`https://pv247messaging.azurewebsites.net/api/file/${avatarId}/download-link`,
                getAuthorizedHeader(getState().authentication.token.data))
                .then(response => console.log(response.data))
        }
    }
