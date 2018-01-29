import { getPersistedToken } from './getPersistedToken'

describe('utils - get persisted token', () => {
    test('get expired persisted token', () => {
        const dummyExpiredToken = '{"data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0ODMyMzI0NjEsImF1ZCI6IlBWMjQ3IFN0dWRlbnRzIn0.CDoscefykrzMPad23INpnV1_RPbC03vK2D1usIStNy0"}'
        localStorage.setItem('sharedAuthenticationToken', dummyExpiredToken);
        const receivedToken = getPersistedToken();

        expect(receivedToken).toBeNull();
    });

    test('get none persisted token', () => {
        const receivedToken = getPersistedToken();

        expect(receivedToken).toBeNull();
    });
})