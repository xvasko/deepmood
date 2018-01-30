import { fetchProfileDetailsAction, updateAvatarIdAction } from '../../actions/profile/actionCreators'
import { profileDetails } from './profileDetails'

describe('profile details reducer', () => {

    test('profile details fetch', () => {
        const pushedProfileDetails = {
            email:"user@gmail.com",
            customData:"{ \"name\": \"CEO\", \"phone\": \"123\", \"avatarId\": \"bla bla\"}"
        }
        const expectedProfileDetails = {
            email: "user@gmail.com",
            name: "CEO",
            phone: "123",
            avatarId: "bla bla",
        }
        const newState = profileDetails(undefined, fetchProfileDetailsAction(pushedProfileDetails));

        expect(newState).toEqual(expectedProfileDetails);
    });

    test('profile update avatar uri', () => {
        const dummyAvatarUri = {id: 'http://blob.com/lol.svg'}
        const newState = profileDetails(undefined, updateAvatarIdAction(dummyAvatarUri));

        expect(newState.avatarId).toEqual(dummyAvatarUri.id);
    });

})
