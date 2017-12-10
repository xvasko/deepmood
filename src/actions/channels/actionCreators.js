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

export const openInviteUsersModal = () => ({
    type: 'INVITE_MODAL_OPEN',
});

export const closeInviteUsersModal = () => ({
    type: 'INVITE_MODAL_CLOSE',
});

export const openBrowseChannelsModal = () => ({
    type: 'BROWSE_MODAL_OPEN',
});

export const closeBrowseChannelsModal = () => ({
    type: 'BROWSE_MODAL_CLOSE',
});

