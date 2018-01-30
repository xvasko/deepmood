import { invalidateToken, receiveValidToken } from '../../actions/shared/actionCreators'
import { token } from './token'

describe('token reducer', () => {

    test('reducer returns a token', () => {
        const dummyToken = { data: 'dummy token data'}
        const newState = token(null, receiveValidToken(dummyToken));

        expect(newState).toEqual(dummyToken);
    });

    test('reducer invalidates a token', () => {
        const dummyToken = { data: 'dummy token data'}
        const newState = token(dummyToken, invalidateToken());

        expect(newState).toBeNull();
    });

})