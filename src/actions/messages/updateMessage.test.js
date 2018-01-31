import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import { removeMessage } from './removeMessage'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    let mock = new MockAdapter(axios);

    test('dispatches one action once', () => {
        const channelId = 'sample channel ID';
        const messageId = 'sample message ID';

        mock.onDelete(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message/${messageId}`).reply(200);

        const expectedActions = [{ type: 'MESSAGES_REMOVE_MESSAGE', payload: { channelId: 'sample channel ID', messageId: 'sample message ID' } } ]

        const store = mockStore({
            authentication: {
                token: {
                    data: 'dummy token'
                }
            }
        })

        return store.dispatch(removeMessage(channelId, messageId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
})