import { combineReducers } from 'redux';

import '../containers/LotPage/reducer';
import lotsListReducer from '../containers/LotsListPage/reducer';
import '../containers/UserProfile/reducer';

export default combineReducers({
    lotsListReducer
})