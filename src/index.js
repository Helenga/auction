import React from 'react';
import ReactDOM from 'react-dom';
import LotsListPage from './pages/LotsListPage';
import LotPage from './pages/LotPage';
import UserProfile from './pages/UserProfile'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<UserProfile />, document.getElementById('root'));
registerServiceWorker();
