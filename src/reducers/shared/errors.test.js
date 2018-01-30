import { errors } from './errors'
import { dismissError, failAuthentication } from '../../actions/shared/actionCreators'
import * as Immutable from 'immutable';

describe('errors reducer', () => {

    test('error create', () => {
        const newState = errors(undefined, failAuthentication('These are not the droids u lookin for', new Error('err')));
        console.log(newState);

        expect(Array.from(newState).length).toEqual(1);
    });

    test('error remove', () => {
        const errorId = 'some id';
        const initialState = Immutable.OrderedMap([[errorId, {id: errorId, message: 'some message', statusText: 'Error'}]])
        const newState = errors(initialState, dismissError(errorId));
        console.log(newState);

        expect(newState.size).toEqual(0);
    });

})