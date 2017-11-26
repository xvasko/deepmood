import { invalidateToken } from './actionCreators';

export const logoutUser = () =>
    (dispatch) => {
        localStorage.removeItem('sharedAuthenticationToken');

        dispatch(invalidateToken());
    };
