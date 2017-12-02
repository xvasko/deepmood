import { receiveValidToken, startAuthentication } from './actionCreators'
import { push } from 'connected-react-router'
import { API_AUTH_URI } from '../../constants/api'
import axios from 'axios';
import { getHeader } from '../../utils/api/headers'
import { postponeFor } from '../../utils/utils'
import { fetchExistingMessages } from '../messages/fetchExistingMessages'

export const authenticateUser = () =>
    (dispatch, getState) => {
        dispatch(startAuthentication());

        if (getState().channels.activeChannel) {

        }

        axios.post(API_AUTH_URI,
            JSON.stringify('deepmood@gmail.com'),
            getHeader()
            )
            .then(token => {
                postponeFor(500).then(() => {
                    dispatch(receiveValidToken(token));
                    dispatch(push('/')); // TODO ked nebudes mat channely
                })


                localStorage.setItem('sharedAuthenticationToken', JSON.stringify(token));
            })
            .catch(error => {
                console.log(error);
            });
    };
