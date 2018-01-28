import * as Immutable from "immutable"

const initialState = {
    email: null,
    name: null,
    phone: null,
    avatarId: null,
    channels: Immutable.List()
};

export const profileDetails = (state = initialState, action) => {
    switch (action.type) {
        case 'PROFILE_DETAILS_FETCH':
            let customData = JSON.parse(action.payload.customData);
            return state = {
                email: action.payload.email,
                name: customData.name,
                phone: customData.phone,
                avatarId: (customData.avatarId === "null" ? null : customData.avatarId),
            }
        case 'PROFILE_UPDATE_AVATAR_ID':
            return state = {
                ...state,
                avatarId: action.payload.id
            };
        default:
            return state;
    }
};
