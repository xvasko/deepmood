export const openProfile = () => ({
    type: 'PROFILE_OPEN',
});

export const closeProfile = () => ({
    type: 'PROFILE_CLOSE',
});

export const fetchProfileDetailsAction = (data) => ({
    type: 'PROFILE_DETAILS_FETCH',
    payload: data
})

export const fetchUserAvatarAction = (data) => ({
    type: 'PROFILE_UPDATE_AVATAR_URI',
    payload: data
})

export const updateAvatarIdAction = (data) => ({
    type: 'PROFILE_UPDATE_AVATAR_ID',
    payload: data
})
