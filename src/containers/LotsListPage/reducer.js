import { fromJS } from 'immutable';
import { GET_ACTUAL_LOTS, SELECT_APPROPRIATE_LOTS } from './actions';

const handlers = {
    [GET_ACTUAL_LOTS]: (state) => { 
        return state.get('lots') 
    },
    [SELECT_APPROPRIATE_LOTS]: (state, {searchString}) => {
        const actualLots = state.get('lots')
        return actualLots.map(lot => lot.title.includes(searchString))
    }
}

export default function (state, {type, payload}) {
    const handler = handlers[type]
    if(handler) {
        return handler(state, payload)
    }
    return fromJS({lots: null})
}