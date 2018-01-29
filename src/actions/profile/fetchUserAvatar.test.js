import { fetchUserAvatar } from './fetchUserAvatar.js';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);


//afterEach(() => {
//    mockAxios.reset()
//})

it('dispatches one action once', () => {
    expect(true).toBeTruthy();
    //let catchFn = jest.fn(),
    //    thenFn = jest.fn();
    //
    //var action = fetchUserAvatar(1);

    //mockAxios.mockResponse({
    //    data: {},
    //    status: 200,
    //    statusText: 'OK',
    //    headers: {},
    //    config: {},
    //});
    //
    //expect(mockAxios.get).toHaveBeenCalledWith('http://blabla/avatar.png', 'http://blabla/avatar.png')

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
})


