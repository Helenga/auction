import { fromJS } from 'immutable';
import { GET_CHOOSEN_LOT, GET_CHOOSEN_LOT_SUCCESS, GET_CHOOSEN_LOT_FAILED, 
         UPDATE_LOT_CURRENT_PRICE, UPDATE_LOT_CURRENT_PRICE_SUCCESS, UPDATE_LOT_CURRENT_PRICE_FAILED } from './actions';

const initialState = {
    lot: {},
    dataFetched: false,
    isFetching: false,
    error: false
}

const handlers = {
    [GET_CHOOSEN_LOT]: (state, data) => { 
         return {
            ...state,
             lot: {},
             isFetching: true
         }
    },
    [GET_CHOOSEN_LOT_SUCCESS]: (state, data) => {
        return {
            ...state,
            lot: data,
            isFetching: false
        }
    },
    [GET_CHOOSEN_LOT_FAILED]: (state) => {
        return {
            ...state,
            isFetching: false,
            error: true
        }
    },
    [UPDATE_LOT_CURRENT_PRICE]: (state) => { 
        return {
            ...state,
            lot: {},
            isFetching: true
        }
   },
   [UPDATE_LOT_CURRENT_PRICE_SUCCESS]: (state, data) => {
       return {
           ...state,
           lot: data,
           isFetching: false
       }
   },
   [UPDATE_LOT_CURRENT_PRICE_FAILED]: (state) => {
       return {
           ...state,
           isFetching: false,
           error: true
       }
   }
}

export default function (state = initialState, { type, data }) {
    const handler = handlers[type]
    if(handler) {
        return handler(state, data)
    }
    return fromJS(state)
}