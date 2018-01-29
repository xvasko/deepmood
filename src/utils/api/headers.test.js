import { getAuthorizedHeader, getHeader } from './headers'

describe('utils - headers', () => {
    test('returns an expected http header', () => {
        const expectedHeader = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
        const receivedHeader = getHeader();
        expect(receivedHeader).toEqual(expectedHeader)
    });

    test('returns an expected http header with authentication token', () => {
        const dummyToken = 'wood wood james wood'
        const expectedHeader = {
            headers: {
                'Authorization': 'bearer ' + dummyToken,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
        const actualHeader = getAuthorizedHeader(dummyToken);
        expect(actualHeader).toEqual(expectedHeader)
    });
})