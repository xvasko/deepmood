import * as Immutable from "immutable"

export const profileChannels = (state = Immutable.List(), action) => {
    switch (action.type) {
        case 'PROFILE_CHANNELS_CREATE':
            action.payload.channels.forEach(channel => {
                if(!state.includes(channel.id) && JSON.parse(channel.customData).users.includes(action.payload.userEmail)) {
                    state = state.push(channel.id)
                }
            })
            return state;
        case 'PROFILE_CHANNELS_REMOVE':
            if (state.includes(action.payload.id)) {
                return state = state.filter(id => id !== action.payload.id)
            } else {
                return state;
            }
        default:
            return state;
    }
};
