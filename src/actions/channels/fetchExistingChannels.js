import axios from 'axios';
import { endChannelFetch, startChannelFetch } from './actionCreators'

export const fetchExistingChannels = () =>
    (dispatch, getState) => {
        dispatch(startChannelFetch());

        axios.get('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502')
            .then(result => {
                    dispatch(endChannelFetch())
                    result.data.channels
                        .filter(channel => !getState().channels.allIds.includes(channel.id))
                        .map(channel => dispatch({type: 'CHANNELS_CREATE_CHANNEL', payload: channel}))
                }
            )
            .catch((error) =>
                console.log(error)
            );
    }


