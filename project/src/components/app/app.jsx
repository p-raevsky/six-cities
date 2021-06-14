import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';

import {AppRoute} from '../../const';

import MainPage from '../pages/main-page/main-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import RoomPage from '../pages/room-page/room-page';
import SingInPage from '../pages/sing-in-page/sing-in-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App(props) {
  const {
    offers,
    reviews,
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact path = {AppRoute.ROOT}>
          <MainPage
            offers = {offers}
          />
        </Route>
        <Route exact path = {AppRoute.FAVORITES}>
          <FavoritesPage
            offers = {offers}
          />
        </Route>
        <Route exact path = {AppRoute.LOGIN}>
          <SingInPage />
        </Route>
        <Route exact path = {`${AppRoute.OFFER}/:id`}
          render = {({match}) => {
            const {id} = match.params;
            const offerInArray = offers.filter((offer) => offer.id === Number(id));
            const [currentOffer] = offerInArray;

            return <RoomPage offer = {currentOffer} reviews = {reviews} nearPlaces = {offers} />;
          }}
        />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object),
};

export default App;
