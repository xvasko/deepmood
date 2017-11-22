export const receiveValidToken = (token) => ({
    type: 'AUTHENTICATION_RECEIVE_VALID_TOKEN',
    payload: {
        token,
    }
});