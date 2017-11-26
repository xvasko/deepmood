import { fetchAuthToken } from '../../utils/api/fetchAuthToken';
import { receiveValidToken } from './actionCreators';
import { push } from 'connected-react-router'

export const authenticateUser = (destinationLocation) =>
    (dispatch) => {
        return fetchAuthToken('deepmood@gmail.com')
            .then((token) => {
                dispatch(receiveValidToken(token));
                dispatch(push('/'));

                localStorage.setItem('sharedAuthenticationToken', JSON.stringify(token));
            })
            .catch((error) => {
                console.log(error);
            });
    };