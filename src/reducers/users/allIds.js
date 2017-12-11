import * as Immutable from 'immutable';

export const allIds = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case 'USERS_CREATE_USER':
            return previousState.push(action.payload.user.email);
        default:
            return previousState;
    }
};
