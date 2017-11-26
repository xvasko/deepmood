import { fetchReceive } from '../../utils/api/fetchReceive';

export const fetchExistingChannels = (store) => {
    fetchReceive(
        'https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502',
        store.getState().authentication.token,
    ).then(
        result => result.channels.map(channel => store.dispatch({type: 'CHANNELS_CREATE_CHANNEL', payload: channel}))
    );
}

