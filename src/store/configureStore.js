import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware();

export const injectSaga = saga => {
    sagaMiddleware.run(sagaMiddleware)
}

export default function (initialState = {}, reducer) {
    const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
    const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)

    
    return store
}