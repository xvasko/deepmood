import jwt_decode from 'jwt-decode';

const isTokenTimestampValid = () => {
    const originTimeStampJSON = localStorage.getItem('sharedAuthenticationToken');
    if(!originTimeStampJSON) {
        return false;
    }

    const expirationTime = new Date(jwt_decode(originTimeStampJSON).exp * 1000);
    const currentTime = new Date();

    return currentTime <= expirationTime;
}

const removeInvalidToken = () => {
    localStorage.removeItem('sharedAuthenticationToken');
};

export const getPersistedToken = () => {
    const persistedTokenJSON = localStorage.getItem('sharedAuthenticationToken') || null;

    if(!isTokenTimestampValid) {
        removeInvalidToken();
        return null;
    }

    return persistedTokenJSON && JSON.parse(persistedTokenJSON);
}