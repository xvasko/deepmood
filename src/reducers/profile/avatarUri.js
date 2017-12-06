export const avatarUri = (prevState = null, action) => {
    switch (action.type) {
        case 'PROFILE_UPDATE_AVATAR_URI':
            return action.payload;
        default:
            return prevState;
    }
};
