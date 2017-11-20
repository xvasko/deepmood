import { fetchAuthToken } from '../../utils/api/fetchAuthToken'

export const authenticateUser = () =>
    (dispatch) => {
        console.log('authenticateUser');
        return fetchAuthToken('deepmood@gmail.com')
            .then((token) => {
                localStorage.setItem('sharedAuthenticationToken', JSON.stringify(token));
                localStorage.setItem('sharedAuthenticationTokenTimeStamp', JSON.stringify(new Date().getTime()));
            })
            .catch((error) => {
                console.log(error);
            });
    };