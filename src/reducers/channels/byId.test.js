import { createChannelAction, removeChannelAction, updateChannelAction } from '../../actions/channels/actionCreators'
import { allIds } from './allIds'
import * as Immutable from 'immutable'
import { removeChannel } from '../../actions/channels/removeChannel'
import { byId } from './byId'
import { updateChannel } from '../../actions/channels/updateChannel'

describe('by id channel reducer', () => {

    test('reducer creates a new channel', () => {
        const channelId = '1984';
        const dummyChannel = { id: channelId, name: 'dummy channel name' };
        const newState = byId(undefined, createChannelAction(dummyChannel));

        expect(newState.get(channelId)).toEqual(dummyChannel)
    });

    test('reducer updates a channel', () => {
        const channelId = '1984';
        const dummyChannel = { id: channelId, name: 'dummy channel name', customData: 'dummy custom data' };
        const expectedChannel = { id: channelId, name: 'xxx', customData: 'xxx' };
        const newState = byId(Immutable.Map([ [ channelId, dummyChannel ] ]), updateChannelAction(channelId, expectedChannel.name, expectedChannel.customData));

        expect(newState.get(channelId)).toEqual(expectedChannel);
    });

    test('reducer removes a channel', () => {
        const channelId = '1984';
        const dummyChannel = { id: channelId, name: 'dummy channel name' };
        const newState = byId(Immutable.Map([ [ channelId, dummyChannel ] ]), removeChannelAction(channelId));

        expect(newState).toEqual(Immutable.Map());
    });

})