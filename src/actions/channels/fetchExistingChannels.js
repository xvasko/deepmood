import axios from 'axios';
import { endChannelFetch, startChannelFetch } from './actionCreators'
import { postponeFor } from '../../utils/utils'
import { fetchAuthData } from '../shared/fetchAuthData'
import { getAuthUserEmail, getPersistedToken } from '../../utils/getPersistedToken'

export const fetchExistingChannels = (store) => {
        store.dispatch(startChannelFetch());
        axios.get('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502')
            .then(result => {
                    postponeFor(500).then(() => {
                        store.dispatch(endChannelFetch())
                    })

                    result.data.channels
                        .filter(channel => !store.getState().channels.allIds.includes(channel.id))
                        .map(channel => store.dispatch({type: 'CHANNELS_CREATE_CHANNEL', payload: channel}))

                    if(getPersistedToken()) {
                        store.dispatch(fetchAuthData(getAuthUserEmail()))
                    }
                }
            )
            .catch((error) =>
                console.log(error)
            );
    }


