import React from 'react';
import {Switch, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';

import MainPage from '../pages/main-page';
import SingInPage from '../pages/sing-in-page';
import NotFoundPage from '../pages/not-found-page';
import PrivateRoute from '../elements/private-route';
import RoomPageWrapper from '../elements/room-page-wrapper';
import FavoritesPage from '../pages/favorites-page';

import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Switch>
      <Route
        exact
        path = {AppRoute.ROOT}
      >
        <MainPage />
      </Route>
      <PrivateRoute
        exact
        path = {AppRoute.FAVORITES}
        isAuth = {authorizationStatus === AuthorizationStatus.AUTH}
        redirectPath = {AppRoute.LOGIN}
        render = {() => <FavoritesPage />}
      />
      <PrivateRoute
        exact
        path = {AppRoute.LOGIN}
        isAuth = {authorizationStatus !== AuthorizationStatus.AUTH}
        redirectPath = {AppRoute.ROOT}
        render = {() => <SingInPage />}
      />
      <Route
        exact
        path = {`${AppRoute.OFFER}/:id`}
        render = {({match}) => {
          const {id} = match.params;

          return (
            <RoomPageWrapper offerId = {id} />
          );
        }}
      />
      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
