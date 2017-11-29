export const isAuthenticating = (prevState = false, action) => {
    switch (action.type) {
        case 'SHARED_AUTHENTICATION_START':
            return true;
        case 'AUTHENTICATION_RECEIVE_VALID_TOKEN':
            return false;
        default:
            return prevState;
    }
};
