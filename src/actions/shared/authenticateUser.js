import { receiveValidToken } from './actionCreators';
import { push } from 'connected-react-router'
import { API_AUTH_URI } from '../../constants/api'
import axios from 'axios';
import { validateResponse } from '../../utils/api/validateResponse'
import { getHeader } from '../../utils/api/headers'

export const authenticateUser = () =>
    (dispatch) => {
        axios.post(API_AUTH_URI,
            JSON.stringify('deepmood@gmail.com'),
            getHeader()
            )
            .then((token) => {
                dispatch(receiveValidToken(token));
                dispatch(push('/'));

                localStorage.setItem('sharedAuthenticationToken', JSON.stringify(token));
            })
            .then(validateResponse)
            .catch((error) => {
                console.log(error);
            });
    };