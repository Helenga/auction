export const GET_ACTUAL_LOTS = 'GET_ACTUAL_LOTS';

export const SELECT_APPROPRIATE_LOTS = 'SELECT_APPROPRIATE_LOTS';

export const getActualLots = function() {
    this.dispatch({ type: GET_ACTUAL_LOTS })
}

export const selectAppropriateLots = function(searchString) {
    this.dispatch({ type: SELECT_APPROPRIATE_LOTS, payload: searchString })
}