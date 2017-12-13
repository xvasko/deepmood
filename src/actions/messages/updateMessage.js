import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';
import { updateMessageAction } from './actionCreators'

export const updateMessage = (channelId, messageId, editedMessage, customData) =>
    (dispatch, getState) => {
        axios.put(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message/${messageId}`,
            JSON.stringify({'value': `${editedMessage}`, 'customData': customData}),
            getAuthorizedHeader(getState().authentication.token.data)
        )
        .then(() => dispatch(updateMessageAction(channelId, messageId, editedMessage, customData)))
        .catch((error) =>
            console.log(error)
        );
    }