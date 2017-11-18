import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LotsListPage from './containers/LotsListPage';
import LotPage from './containers/LotPage';
import UserProfile from './containers/UserProfile';
import PageNotFound from './containers/PageNotFound';

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
