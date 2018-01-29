import {
    dismissError, failAuthentication, receiveValidToken, startAuthentication,
    stopAuthentication
} from './actionCreators'
import { push } from 'connected-react-router'
import { API_AUTH_URI } from '../../constants/api'
import axios from 'axios';
import { getHeader } from '../../utils/api/headers'
import { postponeFor } from '../../utils/utils'
import { fetchAuthData } from './fetchAuthData'

export const authenticateUser = (email) =>
    (dispatch, getState) => {
        dispatch(startAuthentication());

        axios.post(API_AUTH_URI,
            JSON.stringify(email),
            getHeader()
            )
            .then(token => {
                postponeFor(500).then(() => {
                    dispatch(receiveValidToken(token));
                    dispatch(fetchAuthData(email)).then(() => {
                        if (!Array.from(getState().users.byId.keys()).includes(email)) {
                            throw new Error("Error");
                        }
                        dispatch(push('/'));
                    }).catch(error => {
                        dispatch(stopAuthentication())
                        const dispatchedAction = dispatch(failAuthentication('You are looking for a different PV247 project', error));
                        setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), 3500);
                    });
                })

                localStorage.setItem('sharedAuthenticationToken', JSON.stringify(token));
            })
            .catch(error => {
                dispatch(stopAuthentication())
                const dispatchedAction = dispatch(failAuthentication('Sadly, authentication failed...', error));
                setTimeout(() => dispatch(dismissError(dispatchedAction.payload.error.id)), 3500);
            });
    };
