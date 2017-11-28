export const isFetchingChannels = (previousState = false, action) => {
    switch (action.type) {
        case 'CHANNELS_FETCH_START':
            return true;
        case 'CHANNELS_FETCH_END':
            return false;
        default:
            return previousState;
    }
};
