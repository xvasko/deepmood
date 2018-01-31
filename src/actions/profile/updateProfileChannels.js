export const createProfileChannels = (userEmail) =>
    (dispatch, getState) => {
        dispatch({type: 'PROFILE_CHANNELS_CREATE', payload: {channels: Array.from(getState().channels.byId.values()), userEmail: userEmail}})
    }

export const removeProfileChannels = (id) =>
    (dispatch, getState) => {
        dispatch({type: 'PROFILE_CHANNELS_REMOVE', payload: { id: id }})
    }


