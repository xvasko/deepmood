import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)
import { createMessage } from './createMessage'
import { createMessageAction } from './actionCreators'

it('Create message', () => {
    const store = mockStore({})

    //// Return the promise
    //return store.dispatch(createMessage('a', 'b'))
    //    .then(() => {
    //        const actions = store.getActions()
    //        expect(actions[0]).toEqual(createMessageAction())
    //    })

});