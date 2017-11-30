import getActualLotsSaga from '../containers/LotsListPage/saga'
import getChoosenLotSaga from '../containers/LotPage/saga'
import getCurrentUserSaga from '../containers/UserProfile/saga'
import { fork } from 'redux-saga/effects'

export default function* rootSaga () {
    yield [
        fork(getActualLotsSaga),
        fork(getChoosenLotSaga),
        fork(getCurrentUserSaga)
    ];
}