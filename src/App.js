import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LotsListPage from './pages/LotsListPage';
import LotPage from './pages/LotPage';
import UserProfile from './pages/UserProfile';
import PageNotFound from './pages/PageNotFound';

const App = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={LotsListPage} />
        <Route path='/lots/:lot' component={LotPage} />
        <Route path='/users/:user' component={UserProfile} />
        <Route path='/404' component={PageNotFound}/>
        <Redirect to='/404' />
      </Switch>
      </BrowserRouter>
  )
}

export default App;
