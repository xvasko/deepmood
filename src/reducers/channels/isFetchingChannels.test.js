import { isFetchingChannels } from './isFetchingChannels'
import { endChannelFetch, startChannelFetch } from '../../actions/channels/actionCreators'

describe('isBrowseModalOpen reducer', () => {
    test('should return an indicator of channel fetching status', () => {
        const newState = isFetchingChannels(undefined, startChannelFetch());
        expect(newState).toBeTruthy()
    });

    test('should return an indicator of channel fetching status', () => {
        const newState = isFetchingChannels(true, endChannelFetch());
        expect(newState).toBeFalsy()
    });
})
