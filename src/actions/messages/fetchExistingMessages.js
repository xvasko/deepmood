import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';
import { changeActiveChannel } from '../channels/actionCreators'
import { createMessageAction } from './actionCreators'

export const fetchExistingMessages = (channelId) =>
    (dispatch, getState) => {
        axios.get(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message`,
            getAuthorizedHeader(getState().authentication.token.data)
        )
        .then((result) => {

            dispatch(changeActiveChannel(channelId));

            result.data
                .filter(message => !getState().messages.byChannelId.get(channelId).some(m => m.id === message.id))
                .map(message => dispatch(createMessageAction(channelId, result.data.pop())))
        })
        .catch((error) =>
            console.log(error)
        );
    }