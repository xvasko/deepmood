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
                    let payload = { user: user, avatarUri: null }
                    dispatch({type: 'USERS_CREATE_USER', payload: payload })
                    let avatarId = JSON.parse(user.customData).avatarId
                    if (avatarId !== 'null') {
                        axios.get(`https://pv247messaging.azurewebsites.net/api/file/${avatarId}/download-link`,
                            getAuthorizedHeader(getState().authentication.token.data))
                            .then(response =>  dispatch({type: 'USERS_CREATE_USER', payload: {...payload, avatarUri: response.data} }))
                    }
                }
            })
        })
        .catch((error) =>
            console.log(error)
        );
    }