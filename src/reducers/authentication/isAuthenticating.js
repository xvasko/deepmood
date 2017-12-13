export const isAuthenticating = (prevState = false, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_AUTHENTICATION_START':
            return true;
        case 'AUTHENTICATION_AUTHENTICATION_STOP':
        case 'AUTHENTICATION_RECEIVE_VALID_TOKEN':
            return false;
        default:
            return prevState;
    }
};
