import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';
import { fetchUserAvatar } from './fetchUserAvatar'
import { fetchProfileDetailsAction } from './actionCreators'

export const fetchProfileDetails = (email) =>
    (dispatch, getState) => {
        axios.get(`https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user/${email}`,
            getAuthorizedHeader(getState().authentication.token.data)
        )
        .then((result) => {
            dispatch(fetchProfileDetailsAction(result.data))
            dispatch(fetchUserAvatar(getState().profile.profileDetails.avatarId))
        })
        .catch((error) =>
            console.log(error)
        );
    }