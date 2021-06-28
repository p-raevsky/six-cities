import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {AppRoute} from '../../const';

import MainPage from '../pages/main-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import SingInPage from '../pages/sing-in-page';
import NotFoundPage from '../pages/not-found-page';
import PrivateRoute from '../elements/private-route';
import RoomPageWrapper from '../elements/room-page-wrapper';

import browserHistory from '../../services/browser-history';
import {
  fetchReviwsList,
  fetchNearbyList,
  fetchHotel
} from '../../store/api-actions';

function App(props) {
  const {
    onPageLoad,
    isDataLoaded,
  } = props;

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
            onPageLoad(id);

            return (
              <RoomPageWrapper isDataLoaded = {isDataLoaded}>
                <RoomPage />
              </RoomPageWrapper>
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

App.propTypes = {
  onPageLoad: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onPageLoad(id) {
    Promise.all([
      dispatch(fetchReviwsList(id)),
      dispatch(fetchNearbyList(id)),
      dispatch(fetchHotel(id)),
    ]);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
