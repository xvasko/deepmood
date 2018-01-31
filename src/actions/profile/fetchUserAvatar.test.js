import { fetchUserAvatar } from './fetchUserAvatar.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {

    let mock = new MockAdapter(axios);

    afterEach(() => {
        mock.reset()
        mock.restore()
    })

    it('dispatches one action once', () => {
        mock.onGet('https://pv247messaging.azurewebsites.net/api/file/xxx/download-link').reply(200, 'sample uri');

        const expectedActions = [{ type: 'PROFILE_UPDATE_AVATAR_URI', payload: 'sample uri' }]

        // necessary for getAuthHeader() function inside fetchUserAvatar()
        const store = mockStore({ authentication: { token: { data: 'dummy token' } } })

        return store.dispatch(fetchUserAvatar('xxx')).then(() => {
             expect(store.getActions()).toEqual(expectedActions)
        })

        //axios.get('/users')
        //    .then(function(response) {
        //        console.log(response.data);
        //    });

        //var promise = fetchUserAvatar(1);
        //console.log('aaaaaaaaaaaaa')
        //console.log(promise.to)
        //
        //mockAxios.mockResponse({ data: 'sample' });
        //
        //expect(mockAxios.get).toHaveBeenCalledWith(['https://pv247messaging.azurewebsites.net/api/file/1/download-link', 'http://blabla/avatar.png'])
    })
})

//const expectedAction = [{type: 'PROFILE_UPDATE_AVATAR_URI', payload: 'http://blabla/avatar.png'}]
//
//const store = mockStore({avatarUri: null})

//return store.dispatch(fetchUserAvatar(1)).then(() => {
//    // return of async actions
//    expect(store.getActions()).toEqual(expectedAction)
//})

//const dispatch = jest.fn();
//const getState = () => ({
//    authentication: {
//        token: 'pretty please'
//    }
//});
//
//const action = fetchUserAvatar(3);
//const expectedUri = 'http://blabla/avatar.png';
//mockAxios.mockResponse({ status: 200, json: () => Promise.resolve(expectedUri) })
//
//action(dispatch, getState)
//
////expect(dispatch).toHaveBeenCalledWith(fetchUserAvatarAction(expectedUri));
//expect(dispatch).toHaveBeenCalledTimes(1);
//done();