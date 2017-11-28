import { fromJS } from 'immutable';
import { 
    GET_CURRENT_USER,
    GET_CURRENT_USER_SUCCESS,
    GET_CURRENT_USER_FAILED,
    CHANGE_PASSWORD,
    ADD_FUNDS,
    CREATE_LOT
 } from './actions';

 const initialState = {
    user: {},
    dataFetched: false,
    isFetching: false,
    error: false
 }

const handlers = {
    [GET_CURRENT_USER]: (state, payload) => { 
        return {
           ...state,
            isFetching: true
        }
   },
   [GET_CURRENT_USER_SUCCESS]: (state, payload) => {
       return {
           ...state,
           user: payload,
           isFetching: false
       }
   },
   [GET_CURRENT_USER_FAILED]: (state) => {
       return {
           ...state,
           isFetching: false,
           error: true
       }
   }/*,
    [CHANGE_PASSWORD]: (state, {userId, prevPassword, newPassword}) => {
        
    },
    [ADD_FUNDS]: (state, {amount}) => {

    },
    [CREATE_LOT]: (state, {userId, title, location, timer, description, minBet, maxBet}) => {
        
    }*/
}

export default function (state = initialState, { type, payload }) {
    const handler = handlers[type]
    if(handler) {
        return handler(state, payload)
    }
    return fromJS(state)
}