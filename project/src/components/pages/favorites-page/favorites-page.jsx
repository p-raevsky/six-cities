import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../elements/header';
import Footer from '../../elements/footer';
import FavoritesList from '../../elements/favorites-list';
import FavoritesEmpty from '../../elements/favorites-empty';

import placeCardProp from '../offer.prop';

function FavoritesPage(props) {
  const {
    offers,
  } = props;

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

const mapStateToProps = (state) => ({
  offers: state.offers.filter(({isFavorite}) => isFavorite),
});

export default connect(mapStateToProps)(FavoritesPage);
