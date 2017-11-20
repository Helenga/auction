export const GET_CURRENT_USER = 'GET_CURRENT_USER';

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

export const ADD_FUNDS = 'ADD_FUNDS';

export const CREATE_LOT = 'CREATE_LOT';

export const getCurrentUser = function(userId) {
    this.dispatch({ type: GET_CURRENT_USER, payload: userId })
}

export const changePassword = function(userId, prevPassword, newPassword) {
    this.dispatch({ type: CHANGE_PASSWORD, payload: {userId, prevPassword, newPassword} })
}

export const addFunds = function(amount) {
    this.dispatch({ type: ADD_FUNDS, payload: amount })
}

export const createLot = function(userId, title, location, timer, description, minBet, maxBet) {
    this.dispatch({ type: CREATE_LOT, payload: {userId, title, location, timer, description, minBet, maxBet} })
}