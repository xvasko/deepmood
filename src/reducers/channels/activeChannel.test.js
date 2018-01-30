import { activeChannel } from './activeChannel'
import { changeActiveChannel } from '../../actions/channels/actionCreators'

describe('active channel reducer', () => {

    test('reducer returns a new active channel', () => {
        const dummyChannelId = '1984'
        const newState = activeChannel(null, changeActiveChannel(dummyChannelId));

        expect(newState).toEqual(dummyChannelId);
    });

})