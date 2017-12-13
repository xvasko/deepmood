import axios from 'axios';
import { createChannelAction, endChannelFetch, startChannelFetch } from '../channels/actionCreators'
import { postponeFor } from '../../utils/utils'
import { fetchAuthData } from './fetchAuthData'
import { getAuthUserEmail, getPersistedToken } from '../../utils/getPersistedToken'

export const initialDataFetch = (store) => {
        store.dispatch(startChannelFetch());
        axios.get('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502')
            .then(result => {
                    postponeFor(500).then(() => {
                        store.dispatch(endChannelFetch())
                    })

                    result.data.channels
                        .filter(channel => !store.getState().channels.allIds.includes(channel.id))
                        .map(channel => store.dispatch(createChannelAction(channel)))

                    if(getPersistedToken()) {
                        store.dispatch(fetchAuthData(getAuthUserEmail()))
                    }
                }
            )
            .catch((error) =>
                console.log(error)
            );
    }


