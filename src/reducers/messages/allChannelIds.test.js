import { createChannelAction, removeChannelAction } from '../../actions/channels/actionCreators'
import { allChannelIds } from './allChannelIds'
import * as Immutable from 'immutable'

describe('all channels ids messages reducer', () => {

    test('reducer creates a new channel id', () => {
        const expectedId = '1984';
        const dummyChannel = { id: expectedId, name: 'dummy channel name' };
        const newState = allChannelIds(undefined, createChannelAction(dummyChannel));

        expect(newState).toContain(expectedId)
    });

    test('reducer removes a channel id', () => {
        const channelId = '1984'
        const newState = allChannelIds(Immutable.List([channelId]), removeChannelAction(channelId));

        expect(newState).not.toContain(channelId)
    });

})