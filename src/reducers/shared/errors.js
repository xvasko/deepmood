import * as Immutable from 'immutable';
import { LOCATION_CHANGE } from 'connected-react-router';

export const errors = (previousState = Immutable.OrderedMap(), action) => {
    switch (action.type) {
        case 'SHARED_AUTHENTICATION_FAILED':
        case 'SHARED_REGISTRATION_FAILED':
            return previousState.set(action.payload.error.id, { ...action.payload.error });
        case 'SHARED_DISMISS_ERROR':
            return previousState.delete(action.payload.errorId);
        case LOCATION_CHANGE:
            return previousState.clear();
        default:
            return previousState;
    }
};
