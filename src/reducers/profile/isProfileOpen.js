export const isProfileOpen = (previousState = false, action) => {
    switch (action.type) {
        case 'PROFILE_OPEN':
            return true;
        case 'PROFILE_CLOSE':
            return false;
        default:
            return previousState;
    }
};
