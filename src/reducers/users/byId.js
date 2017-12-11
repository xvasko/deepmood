import * as Immutable from 'immutable';

export const byId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case 'USERS_CREATE_USER':
            return previousState.set(action.payload.user.email, { ...action.payload.user, avatarUri: action.payload.avatarUri });
        default:
            return previousState;
    }
};
