import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import  configureStore from './redux/configureStore';
import App from './component/app';

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState);
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

hydrate(  <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
