import axios from 'axios/index'
import { getAuthorizedHeader } from '../../utils/api/headers'

export const updateProfileDetails = (email, customData) =>
    (dispatch, getState) => {
        axios.put(`https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user/${email}`,
            JSON.stringify(`{ "name": "${customData.name}", "phone": "${customData.phone}", "avatarId": "${customData.avatarId}"}`),
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then((result) => {
                dispatch({type: 'PROFILE_DETAILS_FETCH', payload: result.data});
            })
            .catch((error) =>
                console.log(error)
            );
    }