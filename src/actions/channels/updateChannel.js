import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';

export const updateChannel = (id, newUsers) =>
    (dispatch, getState) => {
        var channel = getState().channels.byId.get(id);
        var customData = channel.customData;
        var newCustomData = customData.slice(0, customData.lastIndexOf("[")) + newUsers + "}"
        axios.patch('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502',
            JSON.stringify(
                [
                    {
                        "value":{"id": id, "name": channel.name, "customData": newCustomData},
                        "path": "/channels/" + id,
                        "op": "replace",
                        "from": getState().profile.profileDetails.email
                    }
                ]),
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then((result) => {
                console.log(customData);
                dispatch({type: 'CHANNELS_UPDATE_CHANNEL', payload: {channelId: id, newCustomData: newCustomData}});
            })
            .catch((error) =>
                console.log(error)
            );
    }
