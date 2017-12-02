export const startChannelFetch = () => ({
    type: 'CHANNELS_FETCH_START',
})

export const endChannelFetch = () => ({
    type: 'CHANNELS_FETCH_END',
})

export const changeActiveChannel = (channelId) => ({
    type: 'CHANNELS_CHANGE_ACTIVE_CHANNEL',
    payload: channelId,
})