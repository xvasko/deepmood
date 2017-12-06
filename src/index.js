import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './utils/createStore';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { LayoutSelector } from './containers-redux/LayoutSelector';
import { fetchExistingChannels } from './actions/channels/fetchExistingChannels'
import { fetchExistingUsers } from './actions/users/fetchExistingUsers'

const history = createHashHistory();
const store = createStore(history);

fetchExistingChannels(store);
fetchExistingUsers(store);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LayoutSelector />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
