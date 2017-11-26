export const receiveValidToken = (token) => ({
    type: 'AUTHENTICATION_RECEIVE_VALID_TOKEN',
    payload: {
        token,
    }
});

export const invalidateToken = () => ({
    type: 'AUTHENTICATION_INVALIDATE_TOKEN',
})