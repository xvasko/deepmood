import { errorActionFactory } from './errorActionFactory'

describe('utils - error action factory', () => {
    test('returns an expected error object ', () => {
        const actionType = 'BLA_BLA_ACTION'
        const errorMessage = 'dummy error message';
        const message = 'dummy message'
        const statusCode = '404';
        const blaBlaAction = errorActionFactory(actionType);
        const returnedError = blaBlaAction(errorMessage, {message: message, statusCode: statusCode})

        expect(returnedError.type).toEqual(actionType);
        expect(returnedError.payload.error.message).toEqual(errorMessage)
        expect(returnedError.payload.error.statusText).toEqual(message)
        expect(returnedError.payload.error.statusCode).toEqual(statusCode)
    });
})