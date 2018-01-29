import { getPersistedToken } from './getPersistedToken'
import { postponeFor } from './utils'

describe('utils - utils', () => {
    test('postpone', () => {
        const dummyPromise = new Promise((resolve) => setTimeout(resolve, 1500));
        const receivedPromise = postponeFor(1500);

        expect(receivedPromise).toEqual(dummyPromise);
    });

})