import { profileChannels } from './profileChannels'
import { createProfileChannels } from '../../actions/profile/updateProfileChannels'
import * as Immutable from 'immutable'

describe('profile channels reducer', () => {

    test('add no visible channel to user channel', () => {
        const dummyUserEmail = 'philippe.coutinho@fcb.es'
        const newState = profileChannels(undefined, createProfileChannels(dummyUserEmail));

        expect(newState).toEqual(Immutable.List());
    });

})