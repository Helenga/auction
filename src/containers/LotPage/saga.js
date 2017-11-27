import { GET_CHOOSEN_LOT, GET_CHOOSEN_LOT_SUCCESS, GET_CHOOSEN_LOT_FAILED,
         UPDATE_LOT_CURRENT_PRICE, UPDATE_LOT_CURRENT_PRICE_SUCCESS, UPDATE_LOT_CURRENT_PRICE_FAILED } from './actions'
import { put, takeEvery, take } from 'redux-saga/effects'
import config from '../../config'

function* getChoosenLot(action) {
    try {
        const id = action.lotId
        console.log(id)
        const data = yield getLots(id)
        yield put({type: GET_CHOOSEN_LOT_SUCCESS, data}) 
    }
    catch(e) {
        yield put({type: GET_CHOOSEN_LOT_FAILED})
    }
}

function* updateLotCurrentPrice(action) {
    try {

    } 
    catch(error) {

    }
}

function* getChoosenLotSaga() {
    yield takeEvery(GET_CHOOSEN_LOT, getChoosenLot)
   // yield takeEvery(UPDATE_LOT_CURRENT_PRICE, )
}

function getLots(id) {
    return fetch(`${config.API_BASE_URL}/lots/${id}`)
    .then(res => {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(res.status)
    })
}

export default getChoosenLotSaga