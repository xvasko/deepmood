
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { createChannel } from './createChannel'
import * as Immutable from 'immutable'

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    let mock = new MockAdapter(axios);

    test('dispatches one action once', () => {
        const channelName = 'sample channel name';
        const receivedChannels = { channels: [ { id: 'sample id' } ] }

        mock.onPatch('https://pv247messaging.azurewebsites.net/api/app/6facb4bd-c869-4cd3-8fe8-af81e15a5502').reply(200, receivedChannels);

        const expectedActions = [
            { type: 'CHANNELS_CREATE_CHANNEL', payload: { id: 'sample id' } },
            { type: 'PROFILE_CHANNELS_CREATE', payload: { channels: [], userEmail: 'sample email' } }
        ]

        const store = mockStore({
            authentication: {
                token: {
                    data: 'dummy token'
                }
            },
            profile: {
                profileDetails: {
                    name: 'sample name',
                    email: 'sample email'
                }
            },
            channels: {
                allIds: Immutable.List(),
                byId: Immutable.Map()
            }
        })

        return store.dispatch(createChannel(channelName)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })

    })
})