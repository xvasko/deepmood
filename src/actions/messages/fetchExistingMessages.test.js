import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as Immutable from 'immutable'
import { fetchExistingMessages } from './fetchExistingMessages'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    let mock = new MockAdapter(axios);

    test('dispatches one action once', () => {
        const channelId = 'sample channel ID';
        const receivedMessage = [{ id: 'id' }]

        mock.onGet(`https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502/channel/${channelId}/message`).reply(200, receivedMessage);

        const expectedActions = [
                { payload: "sample channel ID", type: "CHANNELS_CHANGE_ACTIVE_CHANNEL"},
                { payload: {channelId: "sample channel ID", data: {id: "id"}}, type: "MESSAGES_CREATE_MESSAGE"}
            ]


            const store = mockStore({
            authentication: {
                token: {
                    data: 'dummy token'
                }
            },
            messages: {
                byChannelId: Immutable.Map([[channelId, Immutable.List([])]])
            }
        })

        return store.dispatch(fetchExistingMessages(channelId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
})