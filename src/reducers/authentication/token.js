export const token = (prevState = null, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_RECEIVE_TOKEN':
            return action.payload.token;
        case 'AUTHENTICATION_AUTHENTICATION_FAILED':
        case 'AUTHENTICATION_INVALIDATE_TOKEN':
            return null;
        default:
            return prevState;
    }
};