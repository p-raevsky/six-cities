import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../elements/header';
import Footer from '../../elements/footer';
import FavoritesList from '../../elements/favorites-list';

import placeCardProp from '../offer.prop';

function FavoritesPage(props) {
  const {
    offers,
  } = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favoritesPlaces = {offers}/>
          </section>
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
