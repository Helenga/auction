import { fromJS } from 'immutable';
import { 
    GET_CURRENT_USER,
    CHANGE_PASSWORD,
    ADD_FUNDS,
    CREATE_LOT
 } from './actions';

const handlers = {
    [GET_CURRENT_USER]: (state, {userId}) => { 
        const users = state.get('users')
        const user = users.find(user => user.id === userId) 
        if (user !== undefined)
            return user
        return null
    },
    [CHANGE_PASSWORD]: (state, {userId, prevPassword, newPassword}) => {
        
    },
    [ADD_FUNDS]: (state, {amount}) => {

    },
    [CREATE_LOT]: (state, {userId, title, location, timer, description, minBet, maxBet}) => {
        
    }
}

export default function (state, {type, payload}) {
    const handler = handlers[type]
    if(handler) {
        return handler(state, payload)
    }
    return fromJS({users: null})
}