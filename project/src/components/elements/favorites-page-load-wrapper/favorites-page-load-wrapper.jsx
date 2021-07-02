import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {
  fetchFavoriteList,
  checkAuth
} from '../../../store/api-actions';
import {getIsFavoritesLoaded} from '../../../store/data/selectors';

function FavoritesPageLoadWrapper({children}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteList());
    dispatch(checkAuth());
  }, []);

  const IsFavoritesLoaded = useSelector(getIsFavoritesLoaded);

  return IsFavoritesLoaded && children;
}

export default FavoritesPageLoadWrapper;
