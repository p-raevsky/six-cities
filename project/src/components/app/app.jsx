import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';

import MainPage from '../pages/main-page';
import SingInPage from '../pages/sing-in-page';
import NotFoundPage from '../pages/not-found-page';
import PrivateRoute from '../elements/private-route';
import RoomPageLoadWrapper from '../elements/room-page-load-wrapper';

import FavoritesPage from '../pages/favorites-page';

import browserHistory from '../../services/browser-history';
import {AppRoute} from '../../const';

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path = {AppRoute.ROOT}>
          <MainPage />
        </Route>
        <PrivateRoute exact path = {AppRoute.FAVORITES}
          render = {() => <FavoritesPage />}
        />
        <Route exact path = {AppRoute.LOGIN}>
          <SingInPage />
        </Route>
        <Route exact path = {`${AppRoute.OFFER}/:id`}
          render = {({match}) => {
            const {id} = match.params;

            return (
              <RoomPageLoadWrapper offerId = {id} />
            );
          }}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
