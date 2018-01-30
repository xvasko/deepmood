import { createChannelAction, removeChannelAction } from '../../actions/channels/actionCreators'
import { allIds } from './allIds'
import * as Immutable from 'immutable'

describe('all ids channel reducer', () => {

    test('reducer creates a new channel', () => {
        const expectedId = '1984';
        const dummyChannel = { id: expectedId, name: 'dummy channel name' };
        const newState = allIds(undefined, createChannelAction(dummyChannel));

        expect(newState).toContain(expectedId)
    });

    test('reducer removes a channel', () => {
        const channelId = '1984'
        const newState = allIds(Immutable.List([channelId]), removeChannelAction(channelId));


        expect(newState).not.toContain(channelId)
    });

})