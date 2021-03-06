export const activeChannel = (previousState = null, action) => {
    switch (action.type) {
        case 'CHANNELS_CHANGE_ACTIVE_CHANNEL':
            return action.payload;
        default:
            return previousState;
    }
};
