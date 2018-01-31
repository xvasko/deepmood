import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as Immutable from 'immutable'
import { removeChannel } from './removeChannel'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    let mock = new MockAdapter(axios);

    test('dispatches one action once', () => {
        const channelId = 'sample channel ID';

        mock.onPatch('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502').reply(200, 'bla bla');

        const expectedActions = [
            { type: 'PROFILE_CHANNELS_REMOVE', payload: { id: 'sample channel ID' } },
            { type: 'CHANNELS_REMOVE_CHANNEL', payload: 'sample channel ID' }
        ]

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

        return store.dispatch(removeChannel(channelId)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
})