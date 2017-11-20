export const UPDATE_LOT_CURRENT_PRICE = 'UPDATE_LOT_CURRENT_PRICE';

export const GET_CHOOSEN_LOT = 'GET_CHOOSEN_LOT';

export const updateLotCurrentPrice = function(userId, lotId, amount) {
    this.dispatch({ type: UPDATE_LOT_CURRENT_PRICE, payload: { userId, lotId, amount } })
}

export const getChoosenLot = function(lotId) {
    this.dispatch({ type: GET_CHOOSEN_LOT, payload: lotId })
}