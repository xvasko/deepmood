import axios from 'axios';
import { getAuthorizedHeader } from '../../utils/api/headers';
import { updateProfileDetails } from '../profile/updateProfileDetails'
import { profileDetails } from '../../reducers/profile/profileDetails'

export const createChannel = (name) =>
    (dispatch, getState) => {
        var profileDetails = getState().profile.profileDetails;
        console.log(profileDetails)
        axios.patch('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502',
                JSON.stringify([{"path": "/channels/-","op":"add","value":{"name":`${name}` , "customData": "{\"owner\": \"" + profileDetails.email + "\", \"users\": [\"" + profileDetails.email + "\"]}"}}]),
                getAuthorizedHeader(getState().authentication.token.data)
            )
            .then((result) =>
                result.data.channels
                    .filter(channel => !getState().channels.allIds.includes(channel.id))
                    .map(channel => {
                        dispatch({type: 'CHANNELS_CREATE_CHANNEL', payload: channel});
                        dispatch({type: 'PROFILE_ADD_CHANNEL', payload: channel.id})

                        var newChannels = profileDetails.channels.toArray()
                        newChannels.push(channel.id)

                        dispatch(updateProfileDetails(profileDetails.email, {
                            name: profileDetails.name,
                            phone: profileDetails.phone,
                            avatarId: profileDetails.avatarId,
                            channels: newChannels
                        }))
                    })
            )
            .catch((error) =>
                console.log(error)
            );
    }