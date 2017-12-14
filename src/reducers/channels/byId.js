import * as Immutable from 'immutable';

export const byId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case 'CHANNELS_CREATE_CHANNEL':
            return previousState.set(action.payload.id, { ...action.payload });
        case 'CHANNELS_UPDATE_CHANNEL':
            var previousChannel = previousState.get(action.payload.channelId)
            return previousState.set(action.payload.channelId, { ...previousChannel, name: action.payload.channelName, customData: action.payload.newCustomData});
        case 'CHANNELS_REMOVE_CHANNEL':
            return previousState.delete(action.payload);
        default:
            return previousState;
    }
};
