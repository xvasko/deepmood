export const getCleanUsername = (filthyUserName) => {
    return filthyUserName.split('@')[0];
}