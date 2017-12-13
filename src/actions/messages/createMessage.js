import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers';
import { createMessageAction } from './actionCreators'

export const createMessage = (channelId, message) =>
    (dispatch, getState) => {
        axios.post(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message`,
            JSON.stringify({'value': `${message}`, 'customData': '{"upVotes": [], "downVotes": []}'}),
            getAuthorizedHeader(getState().authentication.token.data)
        )
        .then((result) =>
            dispatch(createMessageAction(channelId, result.data))
        )
        .catch((error) =>
            console.log(error)
        );
    }