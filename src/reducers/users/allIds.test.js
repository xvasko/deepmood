import { allIds } from './allIds'
import { fetchExistingUsersAction } from '../../actions/users/actionCreators'

describe('all ids users reducer', () => {

    test('reducer creates a new user', () => {
        const dummyUser = {user: {email: 'blabla@email.com', customData: { name: "creatixx", phone: "0908123123", avatarId: null}}};
        const newState = allIds(undefined, fetchExistingUsersAction(dummyUser));

        expect(newState).toContain(dummyUser.user.email)
    });

})