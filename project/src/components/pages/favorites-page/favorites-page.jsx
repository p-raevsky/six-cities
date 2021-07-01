import React from 'react';
import {useSelector} from 'react-redux';

import Header from '../../elements/header';
import Footer from '../../elements/footer';
import FavoritesList from '../../elements/favorites-list';
import FavoritesEmpty from '../../elements/favorites-empty';

import {getOffers} from '../../../store/data/selectors';

function FavoritesPage() {
  const offers = useSelector(getOffers).filter(({isFavorite}) => isFavorite);

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

export default FavoritesPage;
