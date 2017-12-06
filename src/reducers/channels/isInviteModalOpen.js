export const isInviteModalOpen = (previousState = false, action) => {
    switch (action.type) {
        case 'INVITE_MODAL_OPEN':
            return true;
        case 'INVITE_MODAL_CLOSE':
            return false;
        default:
            return previousState;
    }
};
