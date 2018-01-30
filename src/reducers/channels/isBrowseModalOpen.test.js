import { isBrowseModalOpen } from './isBrowseModalOpen'
import { closeBrowseChannelsModal, openBrowseChannelsModal } from '../../actions/channels/actionCreators'

describe('isBrowseModalOpen reducer', () => {
    test('should return an indicator of opened modal', () => {
        const newState = isBrowseModalOpen(undefined, openBrowseChannelsModal());
        expect(newState).toBeTruthy()
    });

    test('should return an indicator of closed modal', () => {
        const newState = isBrowseModalOpen(true, closeBrowseChannelsModal());
        expect(newState).toBeFalsy()
    });
})
