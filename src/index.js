import React from 'react';
import ReactDOM from 'react-dom';
import LotsListPage from './containers/LotsListPage';
import LotPage from './containers/LotPage';
import UserProfile from './containers/UserProfile';
import PageNotFound from './containers/PageNotFound';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
