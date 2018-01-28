import axios from 'axios';
import { createChannelAction, endChannelFetch, startChannelFetch } from '../channels/actionCreators'
import { postponeFor } from '../../utils/utils'
import { fetchAuthData } from './fetchAuthData'
import { getAuthUserEmail, getPersistedToken } from '../../utils/getPersistedToken'

export const initialDataFetch = () =>
    (dispatch, getState) => {
        dispatch(startChannelFetch());
        axios.get('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502')
            .then(result => {
                    postponeFor(500).then(() => {
                        dispatch(endChannelFetch())
                    })

                    result.data.channels
                        .filter(channel => !getState().channels.allIds.includes(channel.id))
                        .map(channel => dispatch(createChannelAction(channel)))

                    if (getPersistedToken()) {
                        dispatch(fetchAuthData(getAuthUserEmail()))
                    }
                }
            )
            .catch((error) =>
                console.log(error)
            );
    }


