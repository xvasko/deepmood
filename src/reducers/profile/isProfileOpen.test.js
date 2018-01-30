import { isProfileOpen } from './isProfileOpen'
import { closeProfile, openProfile } from '../../actions/profile/actionCreators'

describe('isBrowseModalOpen reducer', () => {
    test('should return an indicator of opened modal', () => {
        const newState = isProfileOpen(undefined, openProfile());
        expect(newState).toBeTruthy()
    });

    test('should return an indicator of closed modal', () => {
        const newState = isProfileOpen(true, closeProfile());
        expect(newState).toBeFalsy()
    });
})
