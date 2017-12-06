import * as Immutable from 'immutable';

export const byId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case 'USERS_CREATE_USER':
            return previousState.set(action.payload.email, { ...action.payload });
        default:
            return previousState;
    }
};
