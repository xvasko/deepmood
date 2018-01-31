import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { uploadUserAvatar } from './uploadUserAvatar'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    let mock = new MockAdapter(axios);

    test('throws error', () => {
        let filse = undefined;

        expect(uploadUserAvatar(filse)).toThrowError('Avatar type is not supported or the system could not load the file.');

    })

    test('dispatches one action once', () => {
        let file = {};
        const receivedFileUri = ['sample avatar uri']
        const email = 'sample email'
        const receivedUsers = [
            {
                "email":"user@gmail.com",
                "customData":"{ \"name\": \"CEO \", \"phone\": \"123\", \"avatarId\": \"null\"}"
            }
        ]

        mock.onPut(`https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user/${email}`).reply(200, 'sample payload');
        mock.onPost('https://pv247messaging.azurewebsites.net/api/file').reply(200, receivedFileUri);
        mock.onGet('https://pv247messaging.azurewebsites.net/api/file/xxx/download-link').reply(200, 'sample uri');
        mock.onGet('https://pv247messaging.azurewebsites.net/api/6facb4bd-c869-4cd3-8fe8-af81e15a5502/user').reply(200, receivedUsers);

        const expectedActions = [ { type: 'PROFILE_UPDATE_AVATAR_ID', payload: 'sample avatar uri' } ]

        const store = mockStore({
            authentication: {
                token: {
                    data: 'dummy token'
                }
            },
            profile: {
                profileDetails: {
                    email: 'sample email',
                    avatarId: 'xxx'
                }
            }
        })

        return store.dispatch(uploadUserAvatar(file)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
})