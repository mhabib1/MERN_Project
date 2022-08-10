import React from 'react';
import  ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App';

import { giantReducer } from './reducers';
console.log(giantReducer);
const store = configureStore({reducer: giantReducer}, compose(applyMiddleware(thunk)));

console.log(store.getState);

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('root'));