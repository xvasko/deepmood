const initialState = {
    email: null,
    name: null,
    phone: null
};

export const profileDetails = (state = initialState, action) => {
    switch (action.type) {
        case 'PROFILE_DETAILS_FETCH':
            var customData = JSON.parse(action.payload.customData);
            state = {
                email: action.payload.email,
                name: customData.name,
                phone: customData.phone
            }
            break;
    }
    return state;
};
