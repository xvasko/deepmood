import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';
import { postponeFor } from '../../utils/utils'

export const fetchExistingMessages = (channelId) =>
    (dispatch, getState) => {
        axios.get(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message`,
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then((result) => {
                //postponeFor(500).then(() => {
                //    dispatch(endChannelFetch())
                //})

                result.data
                    .filter(message => !getState().messages.byChannelId.get(channelId).some(m => m.id == message.id))
                    .map(message => dispatch({
                            type: 'MESSAGES_CREATE_MESSAGE',
                            payload: { channelId: `${channelId}`, data: result.data.pop()}
                        })
                    )
            })
            .catch((error) =>
                console.log(error)
            );
    }