import { avatarUri } from './avatarUri'
import { fetchUserAvatarAction } from '../../actions/profile/actionCreators'

describe('avatar uri reducer', () => {

    test('gets avatar uri', () => {
        const dummyAvatarUri = 'http://tralala.com/avg.png'
        const newState = avatarUri(undefined, fetchUserAvatarAction(dummyAvatarUri));

        expect(newState).toEqual(dummyAvatarUri);
    });

})