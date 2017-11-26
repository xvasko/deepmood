export const getPersistedToken = () => {
    const persistedTokenJSON = localStorage.getItem('sharedAuthenticationToken') || null;

    return persistedTokenJSON && JSON.parse(persistedTokenJSON);
}