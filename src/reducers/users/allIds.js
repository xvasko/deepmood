import * as Immutable from 'immutable';

export const allIds = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case 'USERS_CREATE_USER':
            if (Array.from(previousState).includes(action.payload.user.email)) {
                return previousState;
            } else {
                return previousState.push(action.payload.user.email);
            }
        default:
            return previousState;
    }
};
