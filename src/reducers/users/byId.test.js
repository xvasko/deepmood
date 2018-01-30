import { byId } from './byId'
import { fetchExistingUsersAction } from '../../actions/users/actionCreators'

describe('all id users reducer', () => {

    test('create new user', () => {
        const dummyUser = {user: {email: 'blabla@email.com', customData: { name: "creatixx", phone: "0908123123", avatarId: null}}};
        const newState = byId(undefined, fetchExistingUsersAction(dummyUser));

        expect(newState.get(dummyUser.user.email)).toEqual(dummyUser.user)
    });

})