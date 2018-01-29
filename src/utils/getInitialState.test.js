import { getInitialState } from './getInitialState'

describe('utils - get initial state', () => {
    test('returns the initial state', () => {
        const expectedState = {
            authentication: {
                token: null
            }
        }
        const receivedState = getInitialState();

        expect(receivedState).toEqual(expectedState);
    });
})