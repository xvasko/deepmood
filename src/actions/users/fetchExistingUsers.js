import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers'


export const fetchExistingUsers = () =>
    (dispatch, getState) => {
        axios.get('https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user',
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then(result => {
                console.log(result)
                result.data.map(user => dispatch({type: 'USERS_CREATE_USER', payload: user}))
                }
            )
            .catch((error) =>
                console.log(error)
            );
    }



