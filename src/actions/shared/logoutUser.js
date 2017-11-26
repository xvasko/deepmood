import { invalidateToken } from './actionCreators';

export const logoutUser = () =>
    (dispatch) => {
        localStorage.removeItem('sharedAuthenticationToken');
        localStorage.removeItem('sharedAuthenticationTokenTimeStamp');

        dispatch(invalidateToken());
    };
