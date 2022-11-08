import React from 'react';
import ReactDOM from'react-dom';
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'; //Using legacy_createStore for learning purposes only as this is a learning project.
import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

// Set up redux for global state management.
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
     document.getElementById('root'),
     );