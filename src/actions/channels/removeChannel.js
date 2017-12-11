import { getAuthorizedHeader } from '../../utils/api/headers'
import axios from 'axios';
import { removeProfileChannels } from '../profile/updateProfileChannels'
import { changeActiveChannel } from './actionCreators'

export const removeChannel = (id) =>
    (dispatch, getState) => {
        axios.patch('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502',
            JSON.stringify([{"path": `/channels/${id}`,"op":"remove"}]),
            getAuthorizedHeader(getState().authentication.token.data)
        )
            .then((result) => {
                if (getState().channels.activeChannel === id) {
                    dispatch(changeActiveChannel(null));
                }
                dispatch(removeProfileChannels(id))
                dispatch({type: 'CHANNELS_REMOVE_CHANNEL', payload: id})
            })
            .catch((error) =>
                console.log(error)
            );
    }