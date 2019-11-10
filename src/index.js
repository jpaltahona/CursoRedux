import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(
    
    combineReducers, // todos los reducer de mi aplicacion
    {}, // stado inicial
    applyMiddleware(reduxThunk)

)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
