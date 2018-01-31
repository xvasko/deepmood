import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { fetchProfileDetails } from './fetchProfileDetails'

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
        mock.onGet(`https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user/${email}`).reply(200, 'sample payload');

        const expectedActions = [{ type: 'PROFILE_DETAILS_FETCH', payload: 'sample payload' }]

        const store = mockStore({
            authentication: {
                token: {
                    data: 'dummy token'
                }
            },
            profile: {
                profileDetails: {
                    avatarId: null
                }
            }
        })

        return store.dispatch(fetchProfileDetails(email)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
})