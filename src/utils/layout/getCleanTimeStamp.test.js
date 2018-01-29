import { getCleanTimeStamp } from './getCleanTimeStamp'

describe('utils - get clean timestamp', () => {
    test('returns a clean timestamp', () => {
        const filthyTimestamp = '2017-12-11T16:16:30.0735801Z';
        const cleanTimestamp = '11-12-2017   17:16:30';
        const receivedTimestamp = getCleanTimeStamp(filthyTimestamp);
        expect(receivedTimestamp).toEqual(cleanTimestamp)
    });
})