import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './worker';

import store from './store';
import App from './module/App';

import './style.css';

registerServiceWorker();

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <div>
            <App/>
        </div>
    </Provider>,
    target
);