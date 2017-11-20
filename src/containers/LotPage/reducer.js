import { fromJS } from 'immutable';
import { UPDATE_LOT_CURRENT_PRICE, GET_CHOOSEN_LOT } from './actions';

const handlers = {
    [UPDATE_LOT_CURRENT_PRICE]: (state, {userId, lotId, amount}) => { 
        if (userIsRegistered(userId)) {
            const actualLots = state.get('lots');
            return state.set('lots', actualLots.map(lot => {
                if(lot.id === lotId) {
                    if(amount > lot.currentPrice) {
                        return Object.assign({}, lot, {currentPrice: amount})
                    }
                }
                return lot
            }))
        }
    },
    [GET_CHOOSEN_LOT]: (state, {lotId}) => {
        const actualLots = state.get('lots');
        return actualLots.map(lot => {
            if(lot.id === lotId) {
                return lot
            }
        })
    }
}

export default function (state, {type, payload}) {
    const handler = handlers[type]
    if(handler) {
        return handler(state, payload)
    }
    return fromJS({lots: null})
}

let userIsRegistered = function(state, userId) {
    const registeredUsers = state.get('users')
    if (registeredUsers.map(user => user.id === userId))
        return true;
    return false;
}