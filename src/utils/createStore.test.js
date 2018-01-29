import { createStore } from './createStore'

describe('utils - create store', () => {
    test('assure state was created as expected', () => {
        const history = jest.fn();
        const store = createStore(history)

        expect(store.getState().authentication.token).toBeNull()
        expect(store.getState().channels.activeChannel).toBeNull()
        expect(store.getState().profile.isProfileOpen).toBeFalsy()
    });
})