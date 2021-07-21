import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Header from '../../elements/header/header';
import Footer from '../../elements/footer/footer';
import FavoritesList from '../../elements/favorites-list/favorites-list';
import FavoritesEmpty from '../../elements/favorites-empty/favorites-empty';
import LoadWrapper from '../../elements/load-wrapper/load-wrapper';

import {fetchFavoriteList} from '../../../store/api-actions';
import {getFavorites, getIsFavoritesLoaded} from '../../../store/data/selectors';

function FavoritesPage() {
  const IsFavoritesLoaded = useSelector(getIsFavoritesLoaded);
  const offers = useSelector(getFavorites);
  const dispatch = useDispatch();
  const filteredOffers = offers.filter(({isFavorite}) => isFavorite);

  useEffect(() => {
    dispatch(fetchFavoriteList());
  }, [dispatch]);

  return (
    <div className={`page${offers ? ' page--favorites-empty' : ''}`}>
      <Header />
      <LoadWrapper isLoaded = {IsFavoritesLoaded}>
        <main className={`page__main page__main--favorites${offers ? ' page__main--favorites-empty' : ''}`}>
          <div className="page__favorites-container container">
            {filteredOffers.length ? <FavoritesList favoritesPlaces = {filteredOffers} /> : <FavoritesEmpty />}
          </div>
        </main>
      </LoadWrapper>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
