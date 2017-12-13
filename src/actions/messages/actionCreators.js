export const createMessageAction = (channelId, data) => ({
    type: 'MESSAGES_CREATE_MESSAGE',
    payload: {
        channelId: channelId,
        data: data
    }
})

export const removeMessageAction = (channelId, messageId) => ({
    type: 'MESSAGES_REMOVE_MESSAGE',
    payload: {
        channelId: channelId,
        messageId: messageId
    }
})

export const updateMessageAction = (channelId, messageId, editedMessage, customData) => ({
    type: 'MESSAGES_UPDATE_MESSAGE',
    payload: {
        channelId: channelId,
        messageId: messageId,
        editedMessage: editedMessage,
        customData: customData
    }
})