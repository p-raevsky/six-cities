import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoute} from '../../const';

import MainPage from '../pages/main-page';
import FavoritesPage from '../pages/favorites-page';
import RoomPage from '../pages/room-page';
import SingInPage from '../pages/sing-in-page';
import NotFoundPage from '../pages/not-found-page';
import PrivateRoute from '../elements/private-route';

import browserHistory from '../../services/browser-history';

function App(props) {
  const {
    offers,
    reviews,
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
          render = {({match, history}) => {
            const {id} = match.params;
            const [currentOffer] = offers.filter((offer) => offer.id === Number(id));

            return (
              <RoomPage
                offer = {currentOffer}
                reviews = {reviews}
                nearPlaces = {offers}
              />
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
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  reviews: state.reviews,
});

export default connect(mapStateToProps)(App);
