import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../elements/header';
import Footer from '../../elements/footer';
import FavoritesList from '../../elements/favorites-list';
import FavoritesEmpty from '../../elements/favorites-empty';

import placeCardProp from '../../pages/offer.prop';

function FavoritesPage({offers}) {
  return (
    <div className={`page${offers ? ' page--favorites-empty' : ''}`}>
      <Header />
      <main className={`page__main page__main--favorites${offers ? ' page__main--favorites-empty' : ''}`}>
        <div className="page__favorites-container container">
          {offers.length ? <FavoritesList favoritesPlaces = {offers} /> : <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesPage;
