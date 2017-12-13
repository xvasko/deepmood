import { errorActionFactory } from '../../utils/errorActionFactory'

export const receiveValidToken = (token) => ({
    type: 'AUTHENTICATION_RECEIVE_VALID_TOKEN',
    payload: {
        token,
    }
});

export const invalidateToken = () => ({
    type: 'AUTHENTICATION_INVALIDATE_TOKEN',
})

export const startAuthentication = () => ({
    type: 'AUTHENTICATION_AUTHENTICATION_START',
})

export const stopAuthentication = () => ({
    type: 'AUTHENTICATION_AUTHENTICATION_STOP',
})

export const dismissError = (errorId) => ({
    type: 'SHARED_DISMISS_ERROR',
    payload: {
        errorId,
    }
});

export const failAuthentication = errorActionFactory('SHARED_AUTHENTICATION_FAILED');
export const failRegistration = errorActionFactory('SHARED_REGISTRATION_FAILED');