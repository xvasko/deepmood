import { receiveValidToken, startAuthentication } from './actionCreators'
import { push } from 'connected-react-router'
import { API_AUTH_URI } from '../../constants/api'
import axios from 'axios';
import { getHeader } from '../../utils/api/headers'
import { postponeFor } from '../../utils/utils'
import { fetchProfileDetails } from '../profile/fetchProfileDetails'
import { fetchExistingUsers } from '../users/fetchExistingUsers'
import { createProfileChannels } from '../profile/updateProfileChannels'

export const authenticateUser = () =>
    (dispatch, getState) => {
        dispatch(startAuthentication());

        axios.post(API_AUTH_URI,
            JSON.stringify('deepmood@gmail.com'),
            getHeader()
            )
            .then(token => {
                postponeFor(0).then(() => {
                    dispatch(receiveValidToken(token));
                    dispatch(push('/'));
                    dispatch(fetchProfileDetails('deepmood@gmail.com'));
                    dispatch(fetchExistingUsers());
                    dispatch(createProfileChannels('deepmood@gmail.com'))
                })

                localStorage.setItem('sharedAuthenticationToken', JSON.stringify(token));
            })
            .catch(error => {
                console.log(error);
            });
    };
