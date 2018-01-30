import { closeInviteUsersModal, openInviteUsersModal } from '../../actions/channels/actionCreators'
import { isInviteModalOpen } from './isInviteModalOpen'

describe('isInviteModalOpen reducer', () => {
    test('should return an indicator of opened modal', () => {
        const newState = isInviteModalOpen(undefined, openInviteUsersModal());
        expect(newState).toBeTruthy()
    });

    test('should return an indicator of closed modal', () => {
        const newState = isInviteModalOpen(true, closeInviteUsersModal());
        expect(newState).toBeFalsy()
    });
})
