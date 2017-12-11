import * as Immutable from "immutable"

export const profileChannels = (state =  Immutable.List(), action) => {
    switch (action.type) {
        case 'PROFILE_CHANNELS_CREATE':
            action.payload.channels.forEach(channel => {
                if(!state.includes(channel.id) && JSON.parse(channel.customData).users.includes(action.payload.userEmail)) {
                    state = state.push(channel.id)
                }
            })
            break;
        case 'PROFILE_CHANNELS_REMOVE':
            console.log('sem som sa dostal')
            if (state.includes(action.payload.id)) {
                console.log('neviem ci aj sem')
                state = state.filter(id => id !== action.payload.id)
            }
            break;
    }
    return state;
};
