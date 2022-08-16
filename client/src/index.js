import React from 'react';
import  * as ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App';

import { giantReducer } from './reducers';
const store = configureStore({reducer: giantReducer}, compose(applyMiddleware(thunk)));

console.log(store.getState);

//React 18
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Provider store = {store}> <App/> </Provider>);

//React Legacy versions
//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));