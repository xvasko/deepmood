import axios from 'axios/index'
import { getAuthorizedHeader } from '../../utils/api/headers'
import { fetchExistingUsers } from '../users/fetchExistingUsers'
import { fetchProfileDetailsAction } from './actionCreators'

export const updateProfileDetails = (email, customData) =>
    (dispatch, getState) => {
        return axios.put(`https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user/${email}`,
            JSON.stringify(`{ "name": "${customData.name}", "phone": "${customData.phone}", "avatarId": "${customData.avatarId}"}`),
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then((result) => {
                dispatch(fetchProfileDetailsAction(result.data));
                dispatch(fetchExistingUsers())
            })
            .catch((error) =>
                console.log(error)
            );
    }