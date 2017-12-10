export const isBrowseModalOpen = (previousState = false, action) => {
    switch (action.type) {
        case 'BROWSE_MODAL_OPEN':
            return true;
        case 'BROWSE_MODAL_CLOSE':
            return false;
        default:
            return previousState;
    }
};
