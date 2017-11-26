import { fromJS } from 'immutable';
import { GET_ACTUAL_LOTS, GET_ACTUAL_LOTS_SUCCESS, GET_ACTUAL_LOTS_FAILED } from './actions';

const handlers = {
    [GET_ACTUAL_LOTS]: (state) => { 
         return {
             ...state,
             lots: [],
             isFetching: true
         }
    },
    [GET_ACTUAL_LOTS_SUCCESS]: (state, data) => {
        return {
            ...state,
            lots: data,
            isFetching: false
        }
    },
    [GET_ACTUAL_LOTS_FAILED]: (state) => {
        return {
            ...state,
            isFetching: false,
            error: true
        }
    }
}

export default function (state, { type, data }) {
    const handler = handlers[type]
    if(handler) {
        return handler(state, data)
    }
    return {
        lots: [],
        dataFetched: false,
        isFetching: false,
        error: false
    }
}