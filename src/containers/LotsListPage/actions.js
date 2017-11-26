export const GET_ACTUAL_LOTS = 'GET_ACTUAL_LOTS';

export const GET_ACTUAL_LOTS_SUCCESS = 'GET_ACTUAL_LOTS_SUCCESS';

export const GET_ACTUAL_LOTS_FAILED = 'GET_ACTUAL_LOTS_FAILED';

//export const SELECT_APPROPRIATE_LOTS = 'SELECT_APPROPRIATE_LOTS';

export function getActualLots() {
    return {
        type: GET_ACTUAL_LOTS
    }
}

export function getActualLotsSuccess(data) {
    return {
        type: GET_ACTUAL_LOTS_SUCCESS,
        data
    }
}

export function getActualLotsFailed() {
    return {
        type: GET_ACTUAL_LOTS_FAILED
    }
}

export function fetchData() {
    return {
        type: GET_ACTUAL_LOTS
    }
}

