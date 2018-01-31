import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { updateProfileDetails } from './updateProfileDetails'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    let mock = new MockAdapter(axios);

    afterEach(() => {
        mock.reset()
        mock.restore()
    })

    it('dispatches one action once', () => {
        const email = 'dummy@email.com';
        const customData = {
            name: 'name',
            phone: '0908',
            avatarId: null
        }
        const receivedUsers = [
            {
                "email":"user@gmail.com",
                "customData":"{ \"name\": \"CEO \", \"phone\": \"123\", \"avatarId\": \"null\"}"
            }
        ]
        mock.onPut(`https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user/${email}`).reply(200, 'sample payload');
        mock.onGet('https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user').reply(200, receivedUsers);

        const expectedActions = [{ type: 'PROFILE_DETAILS_FETCH', payload: 'sample payload' }]

        const store = mockStore({
            authentication: {
                token: {
                    data: 'dummy token'
                }
            },
        })

        return store.dispatch(updateProfileDetails(email, customData)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
})