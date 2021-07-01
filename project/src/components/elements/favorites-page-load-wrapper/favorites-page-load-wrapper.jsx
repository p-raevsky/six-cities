import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import FavoritesPage from '../../pages/favorites-page';

import {fetchFavoriteList} from '../../../store/api-actions';
import {
  getFavorites,
  getIsFavoritesLoaded
} from '../../../store/data/selectors';

function FavoritesPageLoadWrapper() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteList());
  }, []);

  const favoritesOffers = useSelector(getFavorites);
  const IsFavoritesLoaded = useSelector(getIsFavoritesLoaded);

  return IsFavoritesLoaded && <FavoritesPage offers = {favoritesOffers} />;
}

export default FavoritesPageLoadWrapper;
