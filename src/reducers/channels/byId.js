import * as Immutable from 'immutable';

export const byId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case 'CHANNELS_CREATE_CHANNEL':
            return previousState.set(action.payload.id, { ...action.payload });
        case 'CHANNELS_REMOVE_CHANNEL':
            return previousState.delete(action.payload);
        default:
            return previousState;
    }
};
