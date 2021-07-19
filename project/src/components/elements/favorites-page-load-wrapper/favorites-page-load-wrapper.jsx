import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {fetchFavoriteList} from '../../../store/api-actions';
import {getIsFavoritesLoaded} from '../../../store/data/selectors';

function FavoritesPageLoadWrapper({children}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteList());
  }, [dispatch]);

  const IsFavoritesLoaded = useSelector(getIsFavoritesLoaded);

  return IsFavoritesLoaded && children;
}

export default FavoritesPageLoadWrapper;
