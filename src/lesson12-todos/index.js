import { createStore } from 'redux';
import React from 'react';
import todoApp from './reducers'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

const store = createStore(todoApp);
render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root')
)

