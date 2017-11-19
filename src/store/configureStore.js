import { createStore, compose } from 'redux';


export default function (initialState = {}, reducer) {
    const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    return createStore(reducer, initialState, composeEnhancers())
}