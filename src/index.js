import React from "react";
import ReactDom from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import CounterContainer from './container/CounterContainer'
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer'

const middlewares = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares))
);

ReactDom.render(
    <Provider store={store}>
        <CounterContainer/>
    </Provider>
    , document.getElementById("root"));
