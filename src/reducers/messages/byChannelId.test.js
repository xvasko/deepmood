import { createChannelAction, removeChannelAction } from '../../actions/channels/actionCreators'
import * as Immutable from 'immutable'
import { byChannelId } from './byChannelId'
import { createMessageAction, removeMessageAction, updateMessageAction } from '../../actions/messages/actionCreators'

describe('by channels id messages reducer', () => {

    const channelId = '1984';
    const messageId = '1234';
    const dummyMessage = { id: messageId, value: 'I am so brave!', customData: 'something' };
    const initState = Immutable.Map([ [ channelId, Immutable.List() ] ]);

    test('reducer creates a new channel', () => {
        const dummyChannel = { id: channelId, name: 'dummy channel name' };
        const newState = byChannelId(undefined, createChannelAction(dummyChannel));

        expect(newState.get(channelId)).toEqual(Immutable.List())
    });

    test('reducer removes a channel', () => {
        const newState = byChannelId(initState, removeChannelAction(channelId));

        expect(newState).toEqual(Immutable.Map());
    });

    test('reducer create message', () => {
        const newState = byChannelId(initState, createMessageAction(channelId, dummyMessage));

        expect(Array.from(newState.get(channelId))).toContain(dummyMessage);
    });

    test('reducer remove message', () => {
        const initialState = Immutable.Map([ [ channelId, Immutable.List([dummyMessage]) ]])
        const newState = byChannelId(initialState, removeMessageAction(channelId, messageId));

        expect(Array.from(newState.get(channelId))).not.toContain(dummyMessage);
    });

    test('reducer update message', () => {
        const initialState = Immutable.Map([ [ channelId, Immutable.List([dummyMessage]) ]])
        const editedMessage = 'This will be hopefully edited!'
        const editedCustomData = 'This will definitely be edited!'
        const newState = byChannelId(initialState, updateMessageAction(channelId, messageId, editedMessage, editedCustomData));
        const receivedEditedMessage = Array.from(newState.get(channelId))[0];

        expect(receivedEditedMessage.value).toEqual(editedMessage);
        expect(receivedEditedMessage.customData).toEqual(editedCustomData);
    });


})