import React from 'react';
import ReactDOM from 'react-dom';
import LotsListPage from './pages/LotsListPage';
import LotPage from './pages/LotPage';
import UserProfile from './pages/UserProfile';
import PageNotFound from './pages/PageNotFound';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageNotFound />, document.getElementById('root'));
registerServiceWorker();
