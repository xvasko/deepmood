import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';

export const fetchProfileDetails = (email) =>
    (dispatch, getState) => {
        axios.get(`https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user/${email}`,
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then((result) => {
                dispatch({type: 'PROFILE_DETAILS_FETCH', payload: result.data})
            })
            .catch((error) =>
                console.log(error)
            );
    }