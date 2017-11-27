import { fetchReceive } from '../../utils/api/fetchReceive';

export const fetchExistingChannels = () =>
    (dispatch, getState) => {
        fetchReceive(
            'https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502',
            getState().authentication.token,
        ).then(
            result => result.channels
                .filter(channel => !getState().channels.allIds.includes(channel.id))
                .map(channel => dispatch({type: 'CHANNELS_CREATE_CHANNEL', payload: channel}))
        );
    }


