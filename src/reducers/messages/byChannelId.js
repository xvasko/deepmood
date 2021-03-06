import * as Immutable from 'immutable';

export const byChannelId = (previousState = Immutable.Map(), action) => {
    switch (action.type) {
        case 'CHANNELS_CREATE_CHANNEL':
            return previousState.set(action.payload.id, Immutable.List());
        case 'CHANNELS_REMOVE_CHANNEL':
            return previousState.delete(action.payload);
        case 'MESSAGES_CREATE_MESSAGE':
            return previousState.set(action.payload.channelId, previousState.get(action.payload.channelId).push(action.payload.data));
        case 'MESSAGES_REMOVE_MESSAGE':
            return previousState.set(action.payload.channelId, previousState.get(action.payload.channelId).filter(message => message.id !== action.payload.messageId));
        case 'MESSAGES_UPDATE_MESSAGE':
            return previousState.set(action.payload.channelId, previousState.get(action.payload.channelId).update(previousState.get(action.payload.channelId).findIndex(message => message.id === action.payload.messageId), message => {return {...message, value: action.payload.editedMessage, customData: action.payload.customData}}));
        default:
            return previousState;
    }
};
