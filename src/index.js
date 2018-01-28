import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './utils/createStore';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { LayoutSelector } from './containers-redux/LayoutSelector';

const history = createHashHistory();
const store = createStore(history);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <LayoutSelector />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
