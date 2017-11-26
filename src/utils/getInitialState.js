import { getPersistedToken } from './getPersistedToken';

export const getInitialState = () => ({
    authentication: {
        token: getPersistedToken()
    },
});