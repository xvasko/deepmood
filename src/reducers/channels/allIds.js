import * as Immutable from 'immutable';

export const allIds = (previousState = Immutable.List(), action) => {
    switch (action.type) {
        case 'CHANNELS_CREATE_CHANNEL':
            return previousState.push(action.payload.id);
        case 'CHANNELS_REMOVE_CHANNEL':
            return previousState.filterNot(id => id === action.payload);
        default:
            return previousState;
    }
};
