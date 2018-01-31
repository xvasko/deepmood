import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as Immutable from 'immutable'
import { createMessage } from './createMessage'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    let mock = new MockAdapter(axios);

    test('dispatches one action once', () => {
        const channelId = 'sample channel ID';
        const message = 'sample message data';
        const receivedMessage = { messageId: 'id' }

        mock.onPost(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message`).reply(200, receivedMessage);

        const expectedActions = [ { type: 'MESSAGES_CREATE_MESSAGE', payload: { channelId: 'sample channel ID', data: {"messageId": "id"} } } ]

        const store = mockStore({
            authentication: {
                token: {
                    data: 'dummy token'
                }
            },
            channels: {
                activeChannel: null,
                allIds: Immutable.List(),
                byId: Immutable.Map()
            }
        })

        return store.dispatch(createMessage(channelId, message)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
})