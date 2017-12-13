import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';
import { removeMessageAction } from './actionCreators'

export const removeMessage = (channelId, messageId) =>
    (dispatch, getState) => {
        axios.delete(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message/${messageId}`,
            getAuthorizedHeader(getState().authentication.token.data)
        )
        .then(() => dispatch(removeMessageAction(channelId, messageId)))
        .catch((error) =>
            console.log(error)
        );
    }