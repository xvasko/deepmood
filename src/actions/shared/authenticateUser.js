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
                localStorage.setItem('sharedAuthenticationTokenTimeStamp', JSON.stringify(new Date().getTime()));
            })
            .catch((error) => {
                console.log(error);
            });
    };