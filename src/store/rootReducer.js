import { combineReducers } from 'redux';

import '../containers/LotPage/reducer';
import lotsList from '../containers/LotsListPage/reducer';
import requiredLot from '../containers/LotPage/reducer';
import '../containers/UserProfile/reducer';

export default combineReducers({
    lotsList,
    requiredLot
})