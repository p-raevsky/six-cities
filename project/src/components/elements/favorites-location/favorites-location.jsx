import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import FavoritesPlacesList from '../favorites-places-list';

import placeCardProp from '../../pages/offer.prop';
import {AppRoute} from '../../../const';
import {setCurrentCity} from '../../../store/action';

function FavoritesLocation({city, filteredPlaces}) {
  const dispatch = useDispatch();

  return (
    <li className="favorites__locations-items">
      <div
        className="favorites__locations locations locations--current"
        onClick={({target}) => {
          if (target.closest('a')) {
            const value = target.closest('a').dataset.city;
            dispatch(setCurrentCity(value));
          }
        }}
      >
        <div className="locations__item">
          <Link
            to={AppRoute.ROOT}
            className="locations__item-link"
            data-city={city}
          >
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <FavoritesPlacesList filteredPlaces = {filteredPlaces}/>
    </li>
  );
}

FavoritesLocation.propTypes = {
  city: PropTypes.string,
  filteredPlaces: PropTypes.arrayOf(placeCardProp),
};

export default FavoritesLocation;
