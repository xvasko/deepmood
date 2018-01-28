import { isAuthenticating } from './isAuthenticating';
import {
    startAuthentication,
    stopAuthentication,
    receiveValidToken
} from '../../actions/shared/actionCreators';

describe('isAuthenticating reducer', () => {
    test('returns an indicator of started authentication', () => {
        const newState = isAuthenticating(null, startAuthentication());
        expect(newState).toBeTruthy()
    });

    test('returns an indicator of stopped authentication', () => {
        const newState = isAuthenticating(true, stopAuthentication());
        expect(newState).toBeFalsy()
    });

    test('returns an indicator of authentication after receiving valid token', () => {
        const newState = isAuthenticating(true, receiveValidToken());
        expect(newState).toBeFalsy()
    });
})
