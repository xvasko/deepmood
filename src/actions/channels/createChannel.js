import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers';
import { createProfileChannels } from '../profile/updateProfileChannels'

export const createChannel = (name) =>
    (dispatch, getState) => {
        var profileDetails = getState().profile.profileDetails;
        axios.patch('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502',
                JSON.stringify([{"path": "/channels/-","op":"add","value":{"name":`${name}` , "customData": "{\"owner\": \"" + profileDetails.email + "\", \"users\": [\"" + profileDetails.email + "\"]}"}}]),
                getAuthorizedHeader(getState().authentication.token.data)
            )
            .then((result) =>
                result.data.channels
                    .filter(channel => !getState().channels.allIds.includes(channel.id))
                    .map(channel => {
                        dispatch({type: 'CHANNELS_CREATE_CHANNEL', payload: channel});
                        dispatch(createProfileChannels(getState().profile.profileDetails.email))
                    })
            )
            .catch((error) =>
                console.log(error)
            );
    }