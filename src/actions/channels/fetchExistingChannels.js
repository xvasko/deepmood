import axios from 'axios';
import { validateResponse } from '../../utils/api/validateResponse'

export const fetchExistingChannels = () =>
    (dispatch, getState) => {
        axios.get('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502')
            .then(
                (result) => result.data.channels
                .filter(channel => !getState().channels.allIds.includes(channel.id))
                .map(channel => dispatch({type: 'CHANNELS_CREATE_CHANNEL', payload: channel}))
            ).then(validateResponse)
            .catch((error) =>
                console.log(error)
            );
    }


