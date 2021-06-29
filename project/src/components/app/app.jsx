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

import browserHistory from '../../services/browser-history';
import {fetchHotelsList} from '../../store/api-actions';

function App(props) {
  const {
    getHotelsData,
    isDataLoaded,
    offers,
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
            getHotelsData();
            return (
              isDataLoaded && <RoomPage offers = {offers} offerId = {id} />
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
  getHotelsData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  getHotelsData(id) {
    dispatch(fetchHotelsList(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
