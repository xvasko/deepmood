import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';

export const updateMessage = (channelId, messageId, editedMessage) =>
    (dispatch, getState) => {
        axios.put(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message/${messageId}`,
            JSON.stringify({'value': `${editedMessage}`, 'customData': 'nedefinovane'}),
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then(() => dispatch({type: 'MESSAGES_UPDATE_MESSAGE', payload: {channelId: channelId, messageId: messageId, editedMessage: editedMessage}}))
            .catch((error) =>
                console.log(error)
            );
    }